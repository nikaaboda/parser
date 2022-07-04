type Statustype = "M" | "K";
type CharSettype = "an" | "n";
type Contenttype = "EXACT" | "PATTERN" | "ANY";
import { VALIDATOR_REGEXES } from "./constants";


export class Validator {
    FILETYPE: any;

    validate(token: string, section: string, tokenIndex: number, FILETYPE: any) {
        const specification = FILETYPE.SPEC[section][tokenIndex];
        const trimmedToken = token.trim();

        const {status, charSet, contentType, contentValue} = specification;

        if(trimmedToken === "" && status === "M") {
            return {section, tokenIndex, message: "Token status is 'Must', but it's not in the sentence!"}
        }

        if(charSet === "n" && VALIDATOR_REGEXES.NUMERIC.test(trimmedToken)) {
            return {section, tokenIndex, message: `Token should be numeric, but isn't: ${trimmedToken}`};
        }

        if(contentType === "EXACT" && !contentValue.includes(trimmedToken)) {
            return {section, tokenIndex, message: `Token is ${trimmedToken}, but should be one of these ${contentValue}`}
        }

        if(contentType === "PATTERN") {
            switch(contentValue) {
                case ("DATE"):
                    if(!VALIDATOR_REGEXES.DATE.test(trimmedToken)) {
                        return {section, tokenIndex, message: `Token should be date, but isn't: ${trimmedToken}`};
                    }
                    break;
                case ("TIME"):
                    if(!VALIDATOR_REGEXES.TIME.test(trimmedToken)) {
                        return {section, tokenIndex, message: `Token should be time, but isn't: ${trimmedToken}`};
                    }
                    break;
                case ("WEEK"):
                    if(!VALIDATOR_REGEXES.WEEK.test(trimmedToken)) {
                        return {section, tokenIndex, message: `Token should be week, but isn't: ${trimmedToken}`};
                    }
                    break;
                case ("BLANK"):
                    if(trimmedToken !== "") {
                        return {section, tokenIndex, message: "Token should be blank."};
                    }
                    break;
            }
            
        }
        
    }
}