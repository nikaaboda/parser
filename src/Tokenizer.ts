import { STRATEDI, FILETYPES, TOKENTYPES } from './constants';
import {Validator} from "./Validator"

type Filetype = "ORDER" | "INVOICE" | "DEASDV";
type Tokentype = "WORD" | "CRLF";

export class Tokenizer {
    string: string;
    leftover: string;
    cursor: number;
    token: string;
    tokenType: string;
    validator: Validator;
    errors: any[];

    //StratEDIpart
    SPEC: any;
    section: string;
    tokenIndex: number;
    sectionIndex: number;
    fileType: Filetype;
    

    constructor() {
        this.string = "";
        this.leftover = "";
        this.cursor = 0;
        this.token = "";
        this.tokenType = "";
        this.validator = new Validator();
        this.errors = [];

        //StratEDIpart
        this.section = "";
        this.sectionIndex = 0;
        this.tokenIndex = 0;
        this.SPEC = {};
        this.fileType = "DEASDV";
    }

    init(string: string, fileType: Filetype) {
        this.string = string;
        this.leftover = string;

        //StratEDIpart
        const {ORDER, INVOICE, DEASDV} = STRATEDI;
        this.SPEC = fileType === FILETYPES[0] ? ORDER : fileType === FILETYPES[1] ? INVOICE : DEASDV;
        this.fileType = fileType;

        this.section = string.slice(0, 3);
        this.sectionIndex = this.SPEC.LENGTHLIST.indexOf(this.section) + 1;

        if(!this.SPEC.SECTIONS.includes(this.section)) {
            throw new SyntaxError(`Unexpected Section enountered ${this.section}, Expected one of these ${this.SPEC.SECTIONS}`)
        }
    }

    hasMoreTokens() {
        return this.cursor < this.string.length;
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
        if(this.section && this.tokenIndex) {
            return this.validator.validate(token, this.section, this.tokenIndex - 1, this.fileType); 
        }
    }

    createNewToken(matched: string, tokenType: string) {
        if(matched.length === 0) {
            throw new Error('New token has a length of zero')
        }

        this.token = matched;
        this.tokenType = tokenType;
        this.cursor += matched.length;

        const validateError = this.validateToken(matched);
        if(validateError) {
            this.errors.push(validateError);
        }

        return {
            type: this.tokenType,
            value: this.token
        };
    }

    /**
     * StratEDI Specific functions
     */
    handleNewToken(tokenType: Tokentype, matched: string) {
        if(tokenType === TOKENTYPES[0]) {
            this.tokenIndex++;
        } else if(tokenType === TOKENTYPES[1]) {
            this.tokenIndex = 0;
            this.section = this.leftover.slice(matched.length, matched.length + 3);
            
            if(!this.SPEC.SECTIONS.includes(this.section) && this.section !== "") {
                throw new SyntaxError(`Unexpected Section enountered ${this.section}, Expected one of these ${this.SPEC.SECTIONS}`)
            }

            this.sectionIndex = this.SPEC.LENGTHLIST.indexOf(this.section) + 1;
        }

        return this.createNewToken(matched, tokenType)
    }

    getTokenLength() {
        return this.SPEC.LENGTHLIST[this.sectionIndex][this.tokenIndex];
    }
    /**
     * StratEDI Specific functions end here
     */

    getNextToken() {
        if(!this.hasMoreTokens()) {
            return {
                type: "",
                value: "",
                errors: this.errors,
                flag: 'EOF'
            };
        }

        this.leftover = this.string.slice(this.cursor);

        for(const [rawRegex, tokenType] of this.SPEC.REGEXES) {
            let regexLength = tokenType === 'WORD' ? this.getTokenLength() : null;

            // This block handles cases when the last word of some section ends unexpectedly 
            // meaning there should have been more chars before line break.
            // To handle it, match the left characters until linebreak and count the length.
            if(regexLength !== null && regexLength !== 1) {
                const sectionLeftoverRegex = new RegExp(`^.{1,${regexLength - 1}}(\n|\r\n)`);
                const sectionLeftover = sectionLeftoverRegex.exec(this.leftover);

                if(sectionLeftover !== null) {
                    const crlfIndex = this.leftover.indexOf('\r\n');
                    const lfIndex = this.leftover.indexOf('\n') 
                    regexLength = crlfIndex === - 1 ? lfIndex : crlfIndex;  
                }
            }
            const regex = this.produceRegex(rawRegex, regexLength)

            const matched = this.match(regex, this.leftover);

            if(matched) {
                return this.handleNewToken(tokenType, matched)
            } 
            
        }
        
        throw new SyntaxError("Unexpected token encountered. Expected 'WORD' or 'CRLF' ");
        
    }
}