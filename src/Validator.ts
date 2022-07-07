import { VALIDATOR_REGEXES, FILETYPES, STRATEDI } from "./constants";
import { STRATEDIVALIDATOR } from "./ValidatorData";

type Filetype = "ORDER" | "INVOICE" | "DEASDV";
interface Spec {
    status: 'M' | 'K';
    charSet: 'an' | 'n';
    contentType: 'ANY' | 'EXACT' | 'PATTERN'
    contentValue: string[] | 'DATE' | 'WEEK' | 'TIME' | 'BLANK' | null;
}


export class Validator {
    validate(token: string, section: string, tokenIndex: number, fileType: Filetype) {
        const SPEC: any = STRATEDIVALIDATOR[fileType];

        const tokenFieldName = STRATEDI[fileType].KEYS[section][tokenIndex];
        const specification = SPEC[section][tokenIndex];
        const trimmedToken = token.trim();

        if(!specification) {
            return null;
        }

        return this.generateMessage(specification, trimmedToken, section, tokenIndex, tokenFieldName)
    }

    generateMessage(specification: Spec, trimmedToken: string, section: string, tokenIndex: number, tokenFieldName: string) {
        const {status, charSet, contentType, contentValue} = specification;

        if(trimmedToken === "" && status === "M") {
            return {section, tokenIndex, message: `Sentence \'${section}\' is missing field \'${tokenFieldName}\'`}
        }

        if(trimmedToken !== "") {
            if(charSet === "n" && VALIDATOR_REGEXES.NUMERIC.test(trimmedToken)) {
                return {section, tokenIndex, message: `Field \'${tokenFieldName}\' should be numeric, but instead got: ${trimmedToken}`};
            }
    
            if(contentType === "EXACT" && !contentValue?.includes(trimmedToken)) {
                return {section, tokenIndex, message: `Field \'${tokenFieldName}\' should be one of these ${contentValue}, but instead got: ${trimmedToken}`}
            }
    
            if(contentType === "PATTERN") {
                switch(contentValue) {
                    case ("DATE"):
                        if(!VALIDATOR_REGEXES.DATE.test(trimmedToken)) {
                            return {section, tokenIndex, message: `Field \'${tokenFieldName}\' should be date(YYYYMMDD), but instead got: ${trimmedToken}`};
                        }
                        break;
                    case ("TIME"):
                        if(!VALIDATOR_REGEXES.TIME.test(trimmedToken)) {
                            return {section, tokenIndex, message: `Field \'${tokenFieldName}\' should be time(HHMM), but instead got: ${trimmedToken}`};
                        }
                        break;
                    case ("WEEK"):
                        if(!VALIDATOR_REGEXES.WEEK.test(trimmedToken)) {
                            return {section, tokenIndex, message: `Field \'${tokenFieldName}\' should be week(WWYYYY), but instead got: ${trimmedToken}`};
                        }
                        break;
                    case ("BLANK"):
                        return {section, tokenIndex, message: `Field \'${tokenFieldName}\' should be one blank/empty, but instead got: ${trimmedToken}`};
                }
                
            }
        }
    }
}