import {Tokenizer} from "./Tokenizer";

type Filetype = "ORDER" | "INVOICE" | "DEASDV";

export interface ASTNode {
    type: string;
    value: string;
    flag?: string; 
    errors?: any[];
}

export class Parser {
    _file: string;
    _lookahead: ASTNode;
    _tokenizer: Tokenizer;
    _errors: any[];

    constructor() {
        this._file = "";
        this._lookahead = {type: "", value: ""};
        this._tokenizer = new Tokenizer();
        this._errors = [];
    }

    parse(string: string, fileType: Filetype) {
        this._file = string;
        this._tokenizer.init(this._file, fileType);
        this._lookahead = this._tokenizer.getNextToken();

        return {
            ast: this.Document(),
            errors: this._errors
        }
    }

    Document() {
        return {
            type: "DOCUMENT",
            value: this.SentenceList()
        }
    }

    SentenceList() {
        const sentences = [this.Sentence()];
        
        while(this._lookahead.flag !== 'EOF') {
            sentences.push(this.Sentence()) 
        }

        this._errors = this._lookahead.errors || [];

        return sentences
    }

    Sentence() {
        return this.WordList();
    }

    WordList() {
        const words = [this.Word()];

        while(this._lookahead?.type !== 'CRLF' && this._lookahead.flag !== 'EOF') {
            words.push(this.Word());
        }
        // Eat CRLF
        while(this._lookahead?.type === 'CRLF') {
            this._eat();
        }

        return {
            type: "SENTENCE",
            value: words
        }
    }

    Word() {
        return this._eat();
    }

    _eat() {
        const token = this._lookahead;

        this._lookahead = this._tokenizer.getNextToken();

        return token;
    }
} 