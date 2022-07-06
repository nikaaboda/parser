import builder from 'xmlbuilder';
import fs from "fs";
import {Parser} from './Parser';
import { STRATEDI, FILETYPES } from './constants';

const TRANSACTIONINFOKEYS = ["100", "111", "115", "119", "120", "121", "130", "140", "150"];
const SHIPMENTINFOKEYS = ["400", "410", "415", "420"];
const ITEMINFOKEYS = ["500", "502", "511", "513", "515", "519", "530", "580", "900", "913"];
const FOOTERKEYS = ["900", "901", "913"];
const INVOICELISTKEYS = ["990", "991"];



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

        const xml = this.constructXML(document, fileType);

        // console.log(xml)
        return {
            file: xml,
            errors
        };
    }

    constructXML(documentAst: any, fileType: Filetype) {
        const {ORDER, INVOICE, DEASDV} = STRATEDI
        const FILETYPE = fileType === FILETYPES[0] ? ORDER : fileType === FILETYPES[1] ? INVOICE : DEASDV;
        const {SECTIONNAME} = FILETYPE;

        const doc = builder.create('document');

        let transaction;
        let transactionInfo;
        let shipmentInfo;
        let itemInfo;
        let transactionFooter;
        let invoiceList;

        for(let i = 0; i < documentAst.length; i++) {
            const {value: words} = documentAst[i];

            const sectionKey = words[0]?.value;
            const sectionLength = words.length;

            switch(sectionKey) {
                case('100'):
                    transaction = doc.ele('transaction')
                    transactionInfo = transaction.ele('transactionInfo');
                    break;
                case('400'):
                    shipmentInfo = transaction?.ele('shipmentInfo');
                    break;
                case('500'):
                    itemInfo = transaction?.ele('itemInfo');
                    break;
                case('900'):
                    transactionFooter = transaction?.ele('transactionFooter');
                    break;
                case('990'):
                    invoiceList = doc.ele('invoiceList');
                    break;
            }
 
            const section = TRANSACTIONINFOKEYS.includes(sectionKey) ? 
                            transactionInfo?.ele(`${SECTIONNAME[sectionKey]}`) 
                            : SHIPMENTINFOKEYS.includes(sectionKey) ?
                            shipmentInfo?.ele(`${SECTIONNAME[sectionKey]}`)
                            : ITEMINFOKEYS.includes(sectionKey) ?
                            itemInfo?.ele(`${SECTIONNAME[sectionKey]}`) 
                            : FOOTERKEYS.includes(sectionKey) ?
                            transactionFooter?.ele(`${SECTIONNAME[sectionKey]}`) 
                            : INVOICELISTKEYS.includes(sectionKey) ?
                            invoiceList?.ele(`${SECTIONNAME[sectionKey]}`) :
                            doc.ele(`${SECTIONNAME[sectionKey]}`)
            
            for(let j = 0; j < sectionLength; j++) {   
                const currentWord = words[j];       

                const tokenValue = currentWord?.value?.trim();
                
                const correspondingKey = FILETYPE.KEYS[sectionKey][j];

                if(tokenValue && tokenValue !== "") {
                    section?.ele(`${correspondingKey}`)
                                        .text(`${tokenValue}`)
                } 
            }
        }

        const xml = doc.end({ pretty: true});

        return xml
    }
}