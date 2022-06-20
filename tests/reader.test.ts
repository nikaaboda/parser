import { Reader } from "../src/Reader";

import { PARSESTRING1, PARSESTRING2, PARSESTRING3, PARSESTRING4, PARSESTRING5, 
         PARSESTRING6, PARSESTRING7, PARSESTRING8, PARSESTRING9, PARSESTRING10,
         PARSESTRING11 } from '../static/StratEDI/Orders/String-Orders';

import { PARSEDORDER1, PARSEDORDER2, PARSEDORDER3, PARSEDORDER4, PARSEDORDER5,
         PARSEDORDER6, PARSEDORDER7, PARSEDORDER8, PARSEDORDER9, PARSEDORDER10,
          PARSEDORDER11, } from "../static/StratEDI/Parsed-Orders/Parsed-Order";




describe("Reader", () => {
    describe("Parsing StratEDI files", () => {
        describe("Order given as a string", () => {
            test("Parses Order 1 correctly", () => {
                const reader = new Reader();

                const result = reader.read(PARSESTRING1);
                expect(result).toEqual(PARSEDORDER1)
            })
    
            test("Parses Order 2 correctly", () => {
                const reader = new Reader();

                const result = reader.read(PARSESTRING2);
                expect(result).toEqual(PARSEDORDER2)
            })
    
            test("Parses Order 3 correctly", () => {
                const reader = new Reader();


                const result = reader.read(PARSESTRING3);
                expect(result).toEqual(PARSEDORDER3)
            })
    
            test("Parses Order 4 correctly", () => {
                const reader = new Reader();

                const result = reader.read(PARSESTRING4);
                expect(result).toEqual(PARSEDORDER4)
            })
    
            test("Parses Order 5 correctly", () => {
                const reader = new Reader();

                const result = reader.read(PARSESTRING5);
                expect(result).toEqual(PARSEDORDER5)
            })
    
            test("Parses Order 6 correctly", () => {
                const reader = new Reader();

                const result = reader.read(PARSESTRING6);
                expect(result).toEqual(PARSEDORDER6)
            })
    
            test("Parses Order 7 correctly", () => {
                const reader = new Reader();

                const result = reader.read(PARSESTRING7);
                expect(result).toEqual(PARSEDORDER7)
            })
    
            test("Parses Order 8 correctly", () => {
                const reader = new Reader();

                const result = reader.read(PARSESTRING8);
                expect(result).toEqual(PARSEDORDER8)
            })
    
            test("Parses Order 9 correctly", () => {
                const reader = new Reader();

                const result = reader.read(PARSESTRING9);
                expect(result).toEqual(PARSEDORDER9)
            })
    
            test("Parses Order 10 correctly", () => {
                const reader = new Reader();

                const result = reader.read(PARSESTRING10);
                expect(result).toEqual(PARSEDORDER10)
            })
    
            test("Parses Order 11 correctly", () => {
                const reader = new Reader();

                const result = reader.read(PARSESTRING11);
                expect(result).toEqual(PARSEDORDER11)
            })
        });
    
        describe("Order given as a file path", () => {
            test("Parses Order 1 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order1.txt", true);
                expect(result).toEqual(PARSEDORDER1)
            })
    
            test("Parses Order 2 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order2.txt", true);
                expect(result).toEqual(PARSEDORDER2)
            })
    
            test("Parses Order 3 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order3.txt", true);
                expect(result).toEqual(PARSEDORDER3)
            })
    
            test("Parses Order 4 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order4.txt", true);
                expect(result).toEqual(PARSEDORDER4)
            })
    
            test("Parses Order 5 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order5.txt", true);
                expect(result).toEqual(PARSEDORDER5)
            })
    
            test("Parses Order 6 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order6.txt", true);
                expect(result).toEqual(PARSEDORDER6)
            })
    
            test("Parses Order 7 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order7.txt", true);
                expect(result).toEqual(PARSEDORDER7)
            })
    
            test("Parses Order 8 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order8.txt", true);
                expect(result).toEqual(PARSEDORDER8)
            })
    
            test("Parses Order 9 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order9.txt", true);
                expect(result).toEqual(PARSEDORDER9)
            })
    
            test("Parses Order 10 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order10.txt", true);
                expect(result).toEqual(PARSEDORDER10)
            })
    
            test("Parses Order 11 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order11.txt", true);
                expect(result).toEqual(PARSEDORDER11)
            })
        });
    })
});


