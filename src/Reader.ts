import fs from "fs";
import {Parser} from './Parser';
import { STRATEDI } from './constants';

export class Reader {
    _parser: Parser;

    constructor() {
        this._parser = new Parser();
    }

    //read function can take either string or file path to parse
    read(file: string, fileType: string, isPath = false) {
        let string: string;
        
        if(isPath) {
            // fs returns a buffer so first it must be converted to string
            string = fs.readFileSync(file).toString('utf-8');
        } else {
            string = file;
        }
    
        const ast = this._parser.parse(string, fileType);
        const {value: document} = ast;
        
        return this.constructJson(document, fileType);
    }


    constructJson(documentAst: any, fileType: string) {
        const {ORDER, INVOICE} = STRATEDI
        const FILETYPE = fileType === "ORDER" ? ORDER : INVOICE;

        // Construct ast from the parser
        let constructedJSON: any = {};

        // Loop over sections
        for(let i = 0; i < documentAst.length; i++) {
            const section = documentAst[i].value[0]?.value;
            const sectionLength = documentAst[i].value.length;

            if(section) {
                if(!constructedJSON.hasOwnProperty(section)) {
                    constructedJSON[section] = []; 
                }

                let sectionInstance: any = {}

                // Loop over each section
                for(let j = 0; j < sectionLength; j++) {                    
                    const token = documentAst[i].value[j]?.value?.trim();
                    const correspondingKey = FILETYPE.KEYS[section][j];

                    if(token && token !== "") {
                        sectionInstance[correspondingKey] = token;
                    }
                }

                constructedJSON[section].push(sectionInstance);
            }
        }
        
        return constructedJSON;
    }

}