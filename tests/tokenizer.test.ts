import { Tokenizer } from "../src/Tokenizer";
import { RAWORDER1 } from "../static/StratEDI/Orders/Raw/String-Orders";

const tokenizer = new Tokenizer();


describe("Tokenizer", () => {
    test("Constructor works properly", () => {
        expect(tokenizer.string).toEqual("");
        expect(tokenizer.leftover).toEqual("");
        expect(tokenizer.cursor).toEqual(0);
        expect(tokenizer.token).toEqual("");
        expect(tokenizer.tokenType).toEqual("");
        expect(tokenizer.section).toEqual("");
        expect(tokenizer.sectionIndex).toEqual(0);
        expect(tokenizer.tokenIndex).toEqual(0);
    });

    test("Init function works properly", () => {
        tokenizer.init(RAWORDER1, "ORDER");

        expect(tokenizer.string).toEqual(RAWORDER1);
        expect(tokenizer.leftover).toEqual(RAWORDER1);
        expect(tokenizer.section).toEqual("000");
        expect(tokenizer.sectionIndex).toEqual(1);
    })

    test("getTokenLength function works properly", () => {
        tokenizer.sectionIndex = 33;
        tokenizer.tokenIndex = 5;
        
        let length = tokenizer.getTokenLength();

        expect(length).toEqual(8);
    })

    test("Throws Error if new token has a length of zero", () => {
        tokenizer.init(RAWORDER1, "ORDER");
        
        expect(tokenizer.createNewToken).toThrow(Error);
    });

});
