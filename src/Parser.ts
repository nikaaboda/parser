import {Tokenizer} from "./Tokenizer";

type Filetype = "ORDER" | "INVOICE" | "DEASDV";

export interface ASTNode {
    type: string;
    value: string;
    flag?: string; 
    errors?: any[];
}

export class Parser {
    file: string;
    lookahead: ASTNode;
    tokenizer: Tokenizer;
    errors: any[];

    constructor() {
        this.file = "";
        this.lookahead = {type: "", value: ""};
        this.tokenizer = new Tokenizer();
        this.errors = [];
    }

    parse(string: string, fileType: Filetype) {
        this.file = string;
        this.tokenizer.init(this.file, fileType);
        this.lookahead = this.tokenizer.getNextToken();

        return {
            ast: this.Document(),
            errors: this.errors
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
        
        while(this.lookahead.flag !== 'EOF') {
            sentences.push(this.Sentence()) 
        }

        this.errors = this.lookahead.errors || [];

        return sentences
    }

    Sentence() {
        return this.WordList();
    }

    WordList() {
        const words = [this.Word()];

        while(this.lookahead?.type !== 'CRLF' && this.lookahead.flag !== 'EOF') {
            words.push(this.Word());
        }
        // Eat CRLF
        while(this.lookahead?.type === 'CRLF') {
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
        const token = this.lookahead;

        this.lookahead = this.tokenizer.getNextToken();

        return token;
    }
} 