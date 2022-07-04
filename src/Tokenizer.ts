import { STRATEDI, FILETYPES, TOKENTYPES } from './constants';
import {Validator} from "./Validator"

type Filetype = "ORDER" | "INVOICE" | "DEASDV";
type Tokentype = "WORD" | "CRLF";

export class Tokenizer {
    _string: string;
    _leftover: string;
    _cursor: number;
    _token: string;
    _tokenType: string;
    _validator: Validator;
    _errors: any[];

    //StratEDIpart
    SPEC: any;
    _section: string;
    _tokenIndex: number;
    _sectionIndex: number;
    _fileType: Filetype;
    

    constructor() {
        this._string = "";
        this._leftover = "";
        this._cursor = 0;
        this._token = "";
        this._tokenType = "";
        this._validator = new Validator();
        this._errors = [];

        //StratEDIpart
        this._section = "";
        this._sectionIndex = 0;
        this._tokenIndex = 0;
        this.SPEC = {};
        this._fileType = "DEASDV";
    }

    init(string: string, fileType: Filetype) {
        this._string = string;
        this._leftover = string;

        //StratEDIpart
        const {ORDER, INVOICE, DEASDV} = STRATEDI;
        this.SPEC = fileType === FILETYPES[0] ? ORDER : fileType === FILETYPES[1] ? INVOICE : DEASDV;
        this._fileType = fileType;

        this._section = string.slice(0, 3);
        this._sectionIndex = this.SPEC.LENGTHLIST.indexOf(this._section) + 1;

        if(!this.SPEC.SECTIONS.includes(this._section)) {
            throw new SyntaxError(`Unexpected Section enountered ${this._section}, Expected one of these ${this.SPEC.SECTIONS}`)
        }
    }

    hasMoreTokens() {
        return this._cursor < this._string.length;
    }

    match(regexp: RegExp, string: string) {
        const matched = regexp.exec(string);

        if(matched !== null) {
            return matched[0];
        }

        return null;
    }

    produceRegex(regex: string, length?: number | null): RegExp {
        const producedRgx = length ? new RegExp(`^${regex}{${length}}`) : new RegExp(`^${regex}`); 

        return producedRgx;
    }

    validateToken(token: string) {
        if(this._section && this._tokenIndex) {
            return this._validator.validate(token, this._section, this._tokenIndex - 1, this._fileType); 
        }
    }

    createNewToken(matched: string, tokenType: string) {
        if(matched.length === 0) {
            throw new Error('New token has a length of zero')
        }

        this._token = matched;
        this._tokenType = tokenType;
        this._cursor += matched.length;

        const validateError = this.validateToken(matched);
        if(validateError) {
            this._errors.push(validateError);
        }

        return {
            type: this._tokenType,
            value: this._token
        };
    }

    /**
     * StratEDI Specific functions
     */
    handleNewToken(tokenType: Tokentype, matched: string) {
        if(tokenType === TOKENTYPES[0]) {
            this._tokenIndex++;
        } else if(tokenType === TOKENTYPES[1]) {
            this._tokenIndex = 0;
            this._section = this._leftover.slice(matched.length, matched.length + 3);
            
            if(!this.SPEC.SECTIONS.includes(this._section) && this._section !== "") {
                throw new SyntaxError(`Unexpected Section enountered ${this._section}, Expected one of these ${this.SPEC.SECTIONS}`)
            }

            this._sectionIndex = this.SPEC.LENGTHLIST.indexOf(this._section) + 1;
        }

        return this.createNewToken(matched, tokenType)
    }

    getTokenLength() {
        return this.SPEC.LENGTHLIST[this._sectionIndex][this._tokenIndex];
    }
    /**
     * StratEDI Specific functions end here
     */

    getNextToken() {
        if(!this.hasMoreTokens()) {
            return {
                type: "",
                value: "",
                errors: this._errors,
                flag: 'EOF'
            };
        }

        this._leftover = this._string.slice(this._cursor);

        for(const [rawRegex, tokenType] of this.SPEC.REGEXES) {
            let regexLength = tokenType === 'WORD' ? this.getTokenLength() : null;

            // This block handles cases when the last word of some section ends unexpectedly 
            // meaning there should have been more chars before line break.
            // To handle it, match the left characters until linebreak and count the length.
            if(regexLength !== null && regexLength !== 1) {
                const sectionLeftoverRegex = new RegExp(`^.{1,${regexLength - 1}}(\n|\r\n)`);
                const sectionLeftover = sectionLeftoverRegex.exec(this._leftover);

                if(sectionLeftover !== null) {
                    const crlfIndex = this._leftover.indexOf('\r\n');
                    const lfIndex = this._leftover.indexOf('\n') 
                    regexLength = crlfIndex === - 1 ? lfIndex : crlfIndex;  
                }
            }
            const regex = this.produceRegex(rawRegex, regexLength)

            const matched = this.match(regex, this._leftover);

            if(matched) {
                return this.handleNewToken(tokenType, matched)
            } 
            
        }
        
        throw new SyntaxError("Unexpected token encountered. Expected 'WORD' or 'CRLF' ");
        
    }
}