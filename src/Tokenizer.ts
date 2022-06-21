import { STRATEDI } from "./constants";

export class Tokenizer {
    _string: string;
    _leftover: string;
    _cursor: number;
    _token: string;
    _tokenType: string;

    //StratEDIpart
    _section: string;
    _tokenIndex: number;
    _sectionIndex: number;
    FILETYPE: any;

    constructor() {
        this._string = "";
        this._leftover = "";
        this._cursor = 0;
        this._token = "";
        this._tokenType = "";

        //StratEDIpart
        this._section = "";
        this._sectionIndex = 0;
        this._tokenIndex = 0;
        this.FILETYPE = {}
        console.log("constructed")
    }

    init(string: string, fileType: string) {
        this._string = string;
        this._leftover = string;

        //StratEDIpart
        this.FILETYPE = fileType === "ORDER" ? STRATEDI.ORDER : STRATEDI.INVOICE;
        this._section = string.slice(0, 3);
        this._sectionIndex = this.FILETYPE.LENGTHLIST.indexOf(this._section) + 1;

        if(!this.FILETYPE.SECTIONS.includes(this._section)) {
            throw new SyntaxError(`Unexpected Section enountered ${this._section}, Expected one of these ${this.FILETYPE.SECTIONS}`)
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

    produceRegex(regex: string, length?: any): RegExp {
        const producedRgx = length ? new RegExp(`^${regex}{${length}}`) : new RegExp(`^${regex}`); 

        return producedRgx;
    }

    createNewToken(matched: string, tokenType: string) {
        if(matched.length === 0) {
            throw new Error('New token has a length of zero')
        }

        this._token = matched;
        this._tokenType = tokenType;
        this._cursor += matched.length;
    }

    /**
     * StratEDI Specific functions
     */
    handleNewToken(tokenType: "WORD" | "CRLF", length: number) {
        if(tokenType === "WORD") {
            this._tokenIndex++;
        } else if(tokenType === "CRLF") {
            this._tokenIndex = 0;
            this._section = this._leftover.slice(length, length + 3);
            
            if(!this.FILETYPE.SECTIONS.includes(this._section) && this._section !== "") {
                throw new SyntaxError(`Unexpected Section enountered ${this._section}, Expected one of these ${this.FILETYPE.SECTIONS}`)
            }

            this._sectionIndex = this.FILETYPE.LENGTHLIST.indexOf(this._section) + 1;
        }   

        console.log("token: ", this._token)
        console.log("tokenType: ", this._tokenType)
        
        return {
            type: this._tokenType,
            value: this._token
        };
    }

    getTokenLength() {
        return this.FILETYPE.LENGTHLIST[this._sectionIndex][this._tokenIndex];
    }
    /**
     * StratEDI Specific functions end here
     */

    getNextToken() {
        if(!this.hasMoreTokens()) {
            return null;
        }

        this._leftover = this._string.slice(this._cursor);

        for(const [rawRegex, tokenType] of this.FILETYPE.REGEXES) {
            const regexLength = tokenType === 'WORD' ? this.getTokenLength() : 1;
            console.log("length: ", regexLength)
            const regex = this.produceRegex(rawRegex, regexLength)

            const matched = this.match(regex, this._leftover);

            if(matched) {
                this.createNewToken(matched, tokenType)
                
                return this.handleNewToken(tokenType, matched.length)
            }
            
        }
        
        throw new SyntaxError("Unexpected token encountered. Expected 'WORD' or 'CRLF' ");
        
    }
}