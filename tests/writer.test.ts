import { Writer } from '../src/Writer';
import { RAWORDER1, RAWORDER2, RAWORDER3, RAWORDER4, RAWORDER5, 
         RAWORDER6, RAWORDER7, RAWORDER8, RAWORDER9, RAWORDER10,
         RAWORDER11 } from '../static/StratEDI/Orders/Raw/String-Orders';

import { RAWINVOICE1, RAWINVOICE2, RAWINVOICE3, RAWINVOICE4, RAWINVOICE5, 
         RAWINVOICE6, RAWINVOICE7, RAWINVOICE8, 
         RAWINVOICE9,} from '../static/StratEDI/Invoices/Raw/String-Invoices';

import { RAWDEASDV1, RAWDEASDV2, RAWDEASDV3, RAWDEASDV4, RAWDEASDV5, 
         RAWDEASDV6, RAWDEASDV7} from '../static/StratEDI/Deasdvs/Raw/String-Deasdvs';

import {STRINGXMLORDER1, STRINGXMLORDER2, STRINGXMLORDER3, STRINGXMLORDER4,
        STRINGXMLORDER5, STRINGXMLORDER6, STRINGXMLORDER7, STRINGXMLORDER8,
        STRINGXMLORDER9, STRINGXMLORDER10, STRINGXMLORDER11} from '../static/StratEDI/Orders/XML/Strings'

import {STRINGXMLINVOICE1, STRINGXMLINVOICE2, STRINGXMLINVOICE3, STRINGXMLINVOICE4,
        STRINGXMLINVOICE5, STRINGXMLINVOICE6, STRINGXMLINVOICE7, STRINGXMLINVOICE8,
        STRINGXMLINVOICE9} from '../static/StratEDI/Invoices/XML/Strings'

import {STRINGXMLDEASDV1, STRINGXMLDEASDV2, STRINGXMLDEASDV3, STRINGXMLDEASDV4,
        STRINGXMLDEASDV5, STRINGXMLDEASDV6, STRINGXMLDEASDV7} from '../static/StratEDI/Deasdvs/XML/Strings'


const STRINGORDER1 = RAWORDER1.replace(/ /g, '');
const STRINGORDER2 = RAWORDER2.replace(/ /g, '');
const STRINGORDER3 = RAWORDER3.replace(/ /g, '');
const STRINGORDER4 = RAWORDER4.replace(/ /g, '');
const STRINGORDER5 = RAWORDER5.replace(/ /g, '');
const STRINGORDER6 = RAWORDER6.replace(/ /g, '');
const STRINGORDER7 = RAWORDER7.replace(/ /g, '');
const STRINGORDER8 = RAWORDER8.replace(/ /g, '');
const STRINGORDER9 = RAWORDER9.replace(/ /g, '');
const STRINGORDER10 = RAWORDER10.replace(/ /g, '');
const STRINGORDER11 = RAWORDER11.replace(/ /g, '');

const STRINGINVOICE1 = RAWINVOICE1.replace(/ /g, '');
const STRINGINVOICE2 = RAWINVOICE2.replace(/ /g, '');
const STRINGINVOICE3 = RAWINVOICE3.replace(/ /g, '');
const STRINGINVOICE4 = RAWINVOICE4.replace(/ /g, '');
const STRINGINVOICE5 = RAWINVOICE5.replace(/ /g, '');
const STRINGINVOICE6 = RAWINVOICE6.replace(/ /g, '');
const STRINGINVOICE7 = RAWINVOICE7.replace(/ /g, '');
const STRINGINVOICE8 = RAWINVOICE8.replace(/ /g, '');
const STRINGINVOICE9 = RAWINVOICE9.replace(/ /g, '');

const STRINGDEASDV1 = RAWDEASDV1.replace(/ /g, '');
const STRINGDEASDV2 = RAWDEASDV2.replace(/ /g, '');
const STRINGDEASDV3 = RAWDEASDV3.replace(/ /g, '');
const STRINGDEASDV4 = RAWDEASDV4.replace(/ /g, '');
const STRINGDEASDV5 = RAWDEASDV5.replace(/ /g, '');
const STRINGDEASDV6 = RAWDEASDV6.replace(/ /g, '');
const STRINGDEASDV7 = RAWDEASDV7.replace(/ /g, '');

describe("Writer", () => {
    describe("Writing StratEDI files", () => {
        describe("Parsing Order XMLs", () => {
            test("Writing Order 1 correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "ORDER", STRINGXMLORDER1);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGORDER1);
            });
            test("Writing Order 2 correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "ORDER", STRINGXMLORDER2);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGORDER2);
            });
            test("Writing Order 3 correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "ORDER", STRINGXMLORDER3);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGORDER3);
            });
            test("Writing Order 4 correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "ORDER", STRINGXMLORDER4);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGORDER4);
            });
            test("Writing Order 5 correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "ORDER", STRINGXMLORDER5);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGORDER5);
            });
            test("Writing Order 6 correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "ORDER", STRINGXMLORDER6);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGORDER6);
            });
            test("Writing Order 7 correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "ORDER", STRINGXMLORDER7);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGORDER7);
            });
            test("Writing Order 8 correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "ORDER", STRINGXMLORDER8);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGORDER8);
            });
            test("Writing Order 9 correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "ORDER", STRINGXMLORDER9);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGORDER9);
            });
            test("Writing Order 10 correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "ORDER", STRINGXMLORDER10);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGORDER10);
            });
            test("Writing Order 11 correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "ORDER", STRINGXMLORDER11);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGORDER11);
            });
        });
        
        describe("Parsing Invoice XMLs", () => {
            test("Parsing Invoice 1 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "INVOICE", STRINGXMLINVOICE1);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGINVOICE1);
            });
            test("Parsing Invoice 2 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "INVOICE", STRINGXMLINVOICE2);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGINVOICE2);
            });
            test("Parsing Invoice 3 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "INVOICE", STRINGXMLINVOICE3);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGINVOICE3);
            });
            test("Parsing Invoice 4 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "INVOICE", STRINGXMLINVOICE4);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGINVOICE4);
            });
            test("Parsing Invoice 5 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "INVOICE", STRINGXMLINVOICE5);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGINVOICE5);
            });
            test("Parsing Invoice 6 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "INVOICE", STRINGXMLINVOICE6);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGINVOICE6);
            });
            test("Parsing Invoice 7 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "INVOICE", STRINGXMLINVOICE7);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGINVOICE7);
            });
            test("Parsing Invoice 8 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "INVOICE", STRINGXMLINVOICE8);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGINVOICE8);
            });
            test("Parsing Invoice 9 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "INVOICE", STRINGXMLINVOICE9);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGINVOICE9);
            });
            
        })

        describe("Parsing Deasdv XMLs", () => {
            test("Parsing Deasdv 1 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "DEASDV", STRINGXMLDEASDV1);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGDEASDV1);
            });
            test("Parsing Deasdv 2 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "DEASDV", STRINGXMLDEASDV2);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGDEASDV2);
            });
            test("Parsing Deasdv 3 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "DEASDV", STRINGXMLDEASDV3);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGDEASDV3);
            });
            test("Parsing Deasdv 4 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "DEASDV", STRINGXMLDEASDV4);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGDEASDV4);
            });
            test("Parsing Deasdv 5 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "DEASDV", STRINGXMLDEASDV5);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGDEASDV5);
            });
            test("Parsing Deasdv 6 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "DEASDV", STRINGXMLDEASDV6);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGDEASDV6);
            });
            test("Parsing Deasdv 7 Correctly", () => {
                const writer = new Writer();
                let result = writer.write("STRATEDI", "DEASDV", STRINGXMLDEASDV7);
                result = result.replace(/ /g, '');
                expect(result).toEqual(STRINGDEASDV7);
            });
            
        })
    })
});
