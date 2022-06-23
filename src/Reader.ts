import fs from "fs";
import {Parser} from './Parser';
import { STRATEDI, FILETYPES } from './constants';

type Filetype = "ORDER" | "INVOICE" | "DEASDV";

export class Reader {
    _parser: Parser;

    constructor() {
        this._parser = new Parser();
    }

    //read function can take either string or file path to parse
    read(file: string, fileType: Filetype, isPath = false) {
        const string = isPath ? fs.readFileSync(file).toString('utf-8') : file;
    
        const ast = this._parser.parse(string, fileType);
        const {value: document} = ast;
        
        return this.constructJson(document, fileType);
    }


    constructJson(documentAst: any, fileType: string) {
        const {ORDER, INVOICE, DEASDV} = STRATEDI
        const FILETYPE = fileType === FILETYPES[0] ? ORDER : fileType === FILETYPES[1] ? INVOICE : DEASDV;

        // Construct ast from the parser
        let constructedJSON: any = {};

        // Loop over sections
        for(let i = 0; i < documentAst.length; i++) {
            const {value: words} = documentAst[i];

            const sectionKey = words[0]?.value;
            const sectionLength = words.length;

            if(sectionKey) {
                if(!constructedJSON.hasOwnProperty(sectionKey)) {
                    constructedJSON[sectionKey] = []; 
                }

                let sectionInstance: any = {}

                // Loop over words
                for(let j = 0; j < sectionLength; j++) {   
                    const currentWord = words[j];       

                    const tokenValue = currentWord?.value?.trim();
                    
                    const correspondingKey = FILETYPE.KEYS[sectionKey][j];

                    if(tokenValue && tokenValue !== "") {
                        sectionInstance[correspondingKey] = tokenValue;
                    } 
                }

                constructedJSON[sectionKey].push(sectionInstance);
            }
        }
        
        return constructedJSON;
    }

}