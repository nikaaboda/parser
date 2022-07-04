import fs from "fs";
import convert from 'xml-js'
import {Parser} from './Parser';
import { STRATEDI, FILETYPES } from './constants';

type Filetype = "ORDER" | "INVOICE" | "DEASDV";
type ReadFormat = "XML" | "JSON";

export class Reader {
    _parser: Parser;

    constructor() {
        this._parser = new Parser();
    }

    //read function can take either string or file path to parse
    read(file: string, fileType: Filetype, isPath = false, readFormat: ReadFormat = "JSON") {
        const string = isPath ? fs.readFileSync(file).toString('utf-8') : file;
    
        const ast = this._parser.parse(string, fileType);
        const { ast : {value: document}, errors} = ast;

        return readFormat === "JSON" ? this.constructJson(document, fileType) : this.constructXML(document, fileType);
    }

    constructXML(documentAst: any, fileType: Filetype) {
        const {ORDER, INVOICE, DEASDV} = STRATEDI
        const FILETYPE = fileType === FILETYPES[0] ? ORDER : fileType === FILETYPES[1] ? INVOICE : DEASDV;

        const json = this.constructJson(documentAst, fileType);

        const options = {compact: true, ignoreComment: true, spaces: 4};
        const xml = convert.json2xml(json, options)

        return xml;
    }

    constructJson(documentAst: any, fileType: Filetype) {
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
                    constructedJSON[`sentence${i + 1}`] = []; 
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

                constructedJSON[`sentence${i + 1}`].push(sectionInstance);
            }
        }
        
        return constructedJSON;
    }

}