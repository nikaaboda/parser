import builder from 'xmlbuilder';
import {Parser} from './Parser';
import { STRATEDI, TRANSACTIONINFOKEYS, SHIPMENTINFOKEYS, ITEMINFOKEYS, FOOTERKEYS, INVOICELISTKEYS } from './constants';

type Filetype = "ORDER" | "INVOICE" | "DEASDV";
type Fileformat = "STRATEDI";

export class Reader {
    parser: Parser;
    doc: builder.XMLElement;
    transaction: builder.XMLElement | undefined;
    transactionInfo: builder.XMLElement | undefined;
    shipmentDetails: builder.XMLElement | undefined;
    itemAndShipmentInfo: builder.XMLElement | undefined;
    shipmentInfo: builder.XMLElement | undefined;
    itemInfo: builder.XMLElement | undefined;
    itemResolutionInfo: builder.XMLElement | undefined;
    transactionFooter: builder.XMLElement | undefined;
    invoiceList: builder.XMLElement | undefined;


    constructor() {
        this.parser = new Parser();
        this.doc = builder.create('document');
        this.transaction = undefined;
        this.transactionInfo = undefined;
        this.shipmentDetails = undefined;
        this.itemAndShipmentInfo = undefined;
        this.shipmentInfo = undefined;
        this.itemInfo = undefined;
        this.itemResolutionInfo = undefined;
        this.transactionFooter = undefined;
        this.invoiceList = undefined;
    }

    //read function can take either string or file path to parse
    read(format: Fileformat, file: string) {
        const fileType = file.includes('ORDER') ? 'ORDER' : 
                        file.includes('INVOIC') ? 'INVOICE' : 
                        file.includes('DESADV') ? 'DEASDV' 
                        : null;

        if(fileType === null) {
            throw new Error('Provided file is none of these types: ORDER, INVOICE, DEASDV')
        }
                
        const ast = this.parser.parse(file, fileType);
        const { ast : {value: document}, errors} = ast;

        const xml = this.constructXML(document, fileType).replace(/"/g, "'");;

        return {
            file: xml,
            errors
        };
    }

    constructXML(documentAst: any, fileType: Filetype) {
        const {SECTIONNAMES, KEYS} = STRATEDI[fileType]
        

        for(let i = 0; i < documentAst.length; i++) {
            const {value: words} = documentAst[i];

            const sectionKey = words[0]?.value;
            const sectionLength = words.length;

            this.createNode(sectionKey);
            const section = this.createSentence(sectionKey, SECTIONNAMES);

            this.createWord(sectionLength, words, KEYS, sectionKey, section);
            
        }

        const xml = this.doc.end({ pretty: true});

        return xml
    }

    createNode(sectionKey: string) {
        switch(sectionKey) {
            case('100'):
                this.transaction = this.doc.ele('transaction')
                this.transactionInfo = this.transaction.ele('transactionInfo');
                break;
            case('400'):
                this.shipmentDetails = this.transaction?.ele('shipmentDetails');
                break;
            case('410'): 
                this.itemAndShipmentInfo = this.transaction?.ele('itemAndShipementInfo')
                this.shipmentInfo = this.itemAndShipmentInfo?.ele('shipmentInfo');
                break
            case('500'):
                this.itemInfo = this.itemAndShipmentInfo === undefined 
                    ? this.transaction?.ele('itemInfo') 
                    : this.itemAndShipmentInfo?.ele('itemInfo')
                break;
            case('601'):
                this.itemResolutionInfo = this.transaction?.ele('itemResolutionInfo');
                break;
            case('900'):
                this.transactionFooter = this.transaction?.ele('transactionFooter');
                break;
            case('990'):
                this.invoiceList = this.doc.ele('invoiceList');
                break;
        }
    }

    createSentence(sectionKey: string, SECTIONNAMES: any) {
        return TRANSACTIONINFOKEYS.includes(sectionKey) ? 
        this.transactionInfo?.ele(`${SECTIONNAMES[sectionKey]}`) 
        : sectionKey === '400' ?
        this.shipmentDetails?.ele(`${SECTIONNAMES[sectionKey]}`)
        : SHIPMENTINFOKEYS.includes(sectionKey) ?
        this.shipmentInfo?.ele(`${SECTIONNAMES[sectionKey]}`)
        : ITEMINFOKEYS.includes(sectionKey) ?
        this.itemInfo?.ele(`${SECTIONNAMES[sectionKey]}`) 
        : sectionKey === '601' ?
        this.itemResolutionInfo?.ele(`${SECTIONNAMES[sectionKey]}`)
        : FOOTERKEYS.includes(sectionKey) ?
        this.transactionFooter?.ele(`${SECTIONNAMES[sectionKey]}`) 
        : INVOICELISTKEYS.includes(sectionKey) ?
        this.invoiceList?.ele(`${SECTIONNAMES[sectionKey]}`) :
        this.doc.ele(`${SECTIONNAMES[sectionKey]}`)
    }

    createWord(sectionLength: number, words: any, KEYS: any, sectionKey: string, section: builder.XMLElement | undefined) {
        for(let j = 0; j < sectionLength; j++) {   
            const currentWord = words[j];       

            const tokenValue = currentWord?.value?.trim();
            
            const correspondingKey = KEYS[sectionKey][j];

            if(tokenValue && tokenValue !== "") {
                section?.ele(`${correspondingKey}`)
                                    .text(`${tokenValue}`)
            } 
        }
    }
}