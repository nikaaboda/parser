import convert from 'xml-js'
import {STRATEDI} from "./constants";

const OPTIONS = {compact: true, spaces: 2, textFn: removeJsonTextAttribute};

function removeJsonTextAttribute(value: any, parentElement: any){
    try{
        const keyNo = Object.keys(parentElement._parent).length;
        const keyName = Object.keys(parentElement._parent)[keyNo-1];
        parentElement._parent[keyName] = value;
    }
    catch(e){}
}

type Filetype = "ORDER" | "INVOICE" | "DEASDV";
type Fileformat = "STRATEDI";

export class Writer {
    FILETYPE: any;
    

    write(format: Fileformat, fileType: Filetype, file: string) {
        this.FILETYPE = STRATEDI[fileType];

        const fileJson = convert.xml2json(file, OPTIONS);

        const document = JSON.parse(fileJson).document;
        
        const stratEDIString = this.constructStratEDIString(document);

        return stratEDIString;
    }

    constructStratEDIString(document: any) {
        let finalStratEDIString = '';
        const sentenceNames = Object.keys(document)
        sentenceNames.forEach((sentenceName) => { 
            const node = document[sentenceName];
            finalStratEDIString = this.handleNode(finalStratEDIString, node);
        })

        return finalStratEDIString;
    }


    handleNode(finalStratEDIString: string, node: any) {
        if(Array.isArray(node)) {
            node.forEach((sentence: any) => {
                finalStratEDIString = this.handleNode(finalStratEDIString, sentence);
            })
        } else {
            const nodeValues = Object.values(node);

            if(typeof nodeValues[0] === 'object' && nodeValues[0] !== null) {
                nodeValues.forEach((value) => {

                    finalStratEDIString = this.handleNode(finalStratEDIString, value);
                })
            } else {
                return this.handleSentence(finalStratEDIString, node);
            }
        }

        return finalStratEDIString;
    }

    handleSentence(finalStratEDIString: string, sentence: any) {
        const [currentSentence, currentSentenceAllWords, currentSentenceActualWords, currentSentenceTypeIndex] = this.getSentenceInfo(sentence);
            
        currentSentenceAllWords.forEach((currentWordKey: string, wordIndex: number) => {
            const delimitedWordLength = this.FILETYPE.LENGTHLIST[currentSentenceTypeIndex + 1][wordIndex];

            if(currentSentenceActualWords.includes(currentWordKey)) {
                finalStratEDIString += this.handleWord(currentSentence, currentWordKey, delimitedWordLength);
            } else {
                finalStratEDIString += ' '.repeat(delimitedWordLength);
            }
        })

        finalStratEDIString += '\n';

        return finalStratEDIString;
    }

    handleWord(currentSentence: any, currentWordKey: string, delimitedWordLength: number) {
        const currentWordValue = currentSentence[currentWordKey];
        const backslashRemovedValue = currentWordValue.replace(/\\/g, '');

        const actualWordLength = backslashRemovedValue.length;
        const numberOfLackingSpaces = delimitedWordLength >= actualWordLength ? delimitedWordLength - actualWordLength : null;
    
        if(numberOfLackingSpaces === null) {
            throw new Error(`Actual Length was bigger than delimited for: ${currentWordValue}. Actual Length: ${actualWordLength}. Delimited Length: ${delimitedWordLength}`)
        }

        const finalWord = backslashRemovedValue + ' '.repeat(numberOfLackingSpaces);

        return finalWord;
    }

    getSentenceInfo(sentence: any) {
        const currentSentenceType = sentence.type;
        const currentSentenceAllWords = this.FILETYPE.KEYS[currentSentenceType];
        const currentSentenceActualWords = Object.keys(sentence);
        const currentSentenceTypeIndex = this.FILETYPE.LENGTHLIST.indexOf(currentSentenceType);

        return [sentence, currentSentenceAllWords, currentSentenceActualWords, currentSentenceTypeIndex];
    }
}

