import fs from "fs";
import convert from 'xml-js'
import {STRATEDI} from "./constants";

const OPTIONS = {compact: true, spaces: 2};

type Filetype = "ORDER" | "INVOICE" | "DEASDV";
type ReadFormat = "XML" | "JSON";

export class Writer {
    FILETYPE: any;
    

    write(file: string, fileType: Filetype, isPath = false, readFormat: ReadFormat = "XML") {
        this.FILETYPE = fileType === "ORDER" ? STRATEDI.ORDER : fileType === "INVOICE" ? STRATEDI.INVOICE : STRATEDI.DEASDV;

        let parseString: any = isPath ? fs.readFileSync(file).toString('utf-8') : file;

        if(readFormat !== "JSON") {
            parseString = convert.xml2json(parseString, OPTIONS);
        }

        const document = JSON.parse(parseString).document;
        
        const stratEDIString = this.constructStratEDIString(document);


        return stratEDIString;
    }

    constructStratEDIString(document: any) {
        let finalStratEDIString = '';
        const sentences = Object.keys(document)

        sentences.forEach((sentence) => { 
            const [currentSentence, currentSentenceAllWords, currentSentenceActualWords, currentSentenceTypeIndex] = this.getSentenceInfo(document, sentence);
            
            currentSentenceAllWords.forEach((currentWordKey: string, wordIndex: number) => {
                const delimitedWordLength = this.FILETYPE.LENGTHLIST[currentSentenceTypeIndex + 1][wordIndex];

                if(currentSentenceActualWords.includes(currentWordKey)) {
                    finalStratEDIString += this.handleWord(currentSentence, currentWordKey, delimitedWordLength);
                } else {
                    finalStratEDIString += ' '.repeat(delimitedWordLength);
                }
            })

            finalStratEDIString += '\n';
        })

        return finalStratEDIString;
    }

    handleWord(currentSentence: any, currentWordKey: any, delimitedWordLength: number) {
        const currentWordValue = currentSentence[currentWordKey]._text;
        const backslashRemovedValue = currentWordValue.replace(/\\/g, '');

        const actualWordLength = backslashRemovedValue.length;
        const numberOfLackingSpaces = delimitedWordLength >= actualWordLength ? delimitedWordLength - actualWordLength : null;
    
        if(numberOfLackingSpaces === null) {
            throw new Error(`Actual Length was bigger than delimited for: ${currentWordValue}. Actual Length: ${actualWordLength}. Delimited Length: ${delimitedWordLength}`)
        }

        const finalWord = backslashRemovedValue + ' '.repeat(numberOfLackingSpaces);

        return finalWord;
    }

    getSentenceInfo(document: any, sentence: string) {
        const currentSentence = document[sentence];
        const currentSentenceType = currentSentence.type._text;
        const currentSentenceAllWords = this.FILETYPE.KEYS[currentSentenceType];
        const currentSentenceActualWords = Object.keys(currentSentence);
        const currentSentenceTypeIndex = this.FILETYPE.LENGTHLIST.indexOf(currentSentenceType);

        return [currentSentence, currentSentenceAllWords, currentSentenceActualWords, currentSentenceTypeIndex];
    }
}

