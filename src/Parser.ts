import {Tokenizer} from "./Tokenizer";

export interface ASTNode {
    type: string;
    value: string;
    flag?: string; 
}

export class Parser {
    _file: string;
    _lookahead: ASTNode | null;
    _tokenizer: Tokenizer;

    constructor() {
        this._file = "";
        this._lookahead = {type: "", value: ""};
        this._tokenizer = new Tokenizer();
    }

    parse(string: string, fileType: string) {
        this._file = string;
        this._tokenizer.init(this._file, fileType);
        this._lookahead = this._tokenizer.getNextToken();

        return this.Document();
    }

    Document() {
        return {
            type: "DOCUMENT",
            value: this.SentenceList()
        }
    }

    SentenceList() {
        const sentences = [this.Sentence()];
        
        while(this._lookahead !== null) {
            sentences.push(this.Sentence()) 
        }

        return sentences
    }

    Sentence() {
        return this.WordList();
    }

    WordList() {
        const words = [this.Word()];

        while(this._lookahead?.type !== 'CRLF' && this._lookahead !== null) {
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