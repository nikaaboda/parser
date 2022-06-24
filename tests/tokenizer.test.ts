import { Tokenizer } from "../src/Tokenizer";
import { RAWORDER1 } from "../static/StratEDI/Orders/Raw/String-Orders";

const tokenizer = new Tokenizer();


describe("Tokenizer", () => {
    test("Constructor works properly", () => {
        expect(tokenizer._string).toEqual("");
        expect(tokenizer._leftover).toEqual("");
        expect(tokenizer._cursor).toEqual(0);
        expect(tokenizer._token).toEqual("");
        expect(tokenizer._tokenType).toEqual("");
        expect(tokenizer._section).toEqual("");
        expect(tokenizer._sectionIndex).toEqual(0);
        expect(tokenizer._tokenIndex).toEqual(0);
    });

    test("Init function works properly", () => {
        tokenizer.init(RAWORDER1, "ORDER");

        expect(tokenizer._string).toEqual(RAWORDER1);
        expect(tokenizer._leftover).toEqual(RAWORDER1);
        expect(tokenizer._section).toEqual("000");
        expect(tokenizer._sectionIndex).toEqual(1);
    })

    test("getTokenLength function works properly", () => {
        tokenizer._sectionIndex = 33;
        tokenizer._tokenIndex = 5;
        
        let length = tokenizer.getTokenLength();

        expect(length).toEqual(8);
    })

    test("Throws Error if new token has a length of zero", () => {
        tokenizer.init(RAWORDER1, "ORDER");
        
        expect(tokenizer.createNewToken).toThrow(Error);
    });

});
