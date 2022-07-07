import { Writer } from '../src/Writer';
import { RAWORDER1, RAWORDER2, RAWORDER3, RAWORDER4, RAWORDER5, 
         RAWORDER6, RAWORDER7, RAWORDER8, RAWORDER9, RAWORDER10,
         RAWORDER11 } from '../static/StratEDI/Orders/Raw/String-Orders';

import { RAWINVOICE1, RAWINVOICE2, RAWINVOICE3, RAWINVOICE4, RAWINVOICE5, 
         RAWINVOICE6, RAWINVOICE7, RAWINVOICE8, 
         RAWINVOICE9,} from '../static/StratEDI/Invoices/Raw/String-Invoices';

import { RAWDEASDV1, RAWDEASDV2, RAWDEASDV3, RAWDEASDV4, RAWDEASDV5, 
         RAWDEASDV6, RAWDEASDV7} from '../static/StratEDI/Deasdvs/Raw/String-Deasdvs';


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

describe("Reader", () => {
    describe("Writing StratEDI files", () => {
        describe("Parsing XML files", () => {
            describe("Parsing Order XMLs", () => {
                test("Writing Order 1 correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Orders/XML/Order1.xml", "ORDER", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGORDER1);
                });
                test("Writing Order 2 correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Orders/XML/Order2.xml", "ORDER", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGORDER2);
                });
                test("Writing Order 3 correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Orders/XML/Order3.xml", "ORDER", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGORDER3);
                });
                test("Writing Order 4 correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Orders/XML/Order4.xml", "ORDER", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGORDER4);
                });
                test("Writing Order 5 correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Orders/XML/Order5.xml", "ORDER", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGORDER5);
                });
                test("Writing Order 6 correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Orders/XML/Order6.xml", "ORDER", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGORDER6);
                });
                test("Writing Order 7 correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Orders/XML/Order7.xml", "ORDER", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGORDER7);
                });
                test("Writing Order 8 correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Orders/XML/Order8.xml", "ORDER", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGORDER8);
                });
                test("Writing Order 9 correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Orders/XML/Order9.xml", "ORDER", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGORDER9);
                });
                test("Writing Order 10 correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Orders/XML/Order10.xml", "ORDER", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGORDER10);
                });
                test("Writing Order 11 correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Orders/XML/Order11.xml", "ORDER", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGORDER11);
                });
            });
            
            describe("Parsing Invoice XMLs", () => {
                test("Parsing Invoice 1 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Invoices/XML/Invoice1.xml", "INVOICE", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGINVOICE1);
                });
                test("Parsing Invoice 2 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Invoices/XML/Invoice2.xml", "INVOICE", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGINVOICE2);
                });
                test("Parsing Invoice 3 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Invoices/XML/Invoice3.xml", "INVOICE", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGINVOICE3);
                });
                test("Parsing Invoice 4 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Invoices/XML/Invoice4.xml", "INVOICE", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGINVOICE4);
                });
                test("Parsing Invoice 5 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Invoices/XML/Invoice5.xml", "INVOICE", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGINVOICE5);
                });
                test("Parsing Invoice 6 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Invoices/XML/Invoice6.xml", "INVOICE", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGINVOICE6);
                });
                test("Parsing Invoice 7 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Invoices/XML/Invoice7.xml", "INVOICE", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGINVOICE7);
                });
                test("Parsing Invoice 8 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Invoices/XML/Invoice8.xml", "INVOICE", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGINVOICE8);
                });
                test("Parsing Invoice 9 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Invoices/XML/Invoice9.xml", "INVOICE", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGINVOICE9);
                });
                
            })

            describe("Parsing Deasdv XMLs", () => {
                test("Parsing Deasdv 1 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Deasdvs/XML/Deasdv1.xml", "DEASDV", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGDEASDV1);
                });
                test("Parsing Deasdv 2 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Deasdvs/XML/Deasdv2.xml", "DEASDV", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGDEASDV2);
                });
                test("Parsing Deasdv 3 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Deasdvs/XML/Deasdv3.xml", "DEASDV", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGDEASDV3);
                });
                test("Parsing Deasdv 4 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Deasdvs/XML/Deasdv4.xml", "DEASDV", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGDEASDV4);
                });
                test("Parsing Deasdv 5 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Deasdvs/XML/Deasdv5.xml", "DEASDV", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGDEASDV5);
                });
                test("Parsing Deasdv 6 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Deasdvs/XML/Deasdv6.xml", "DEASDV", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGDEASDV6);
                });
                test("Parsing Deasdv 7 Correctly", () => {
                    const writer = new Writer();
                    let result = writer.write("../static/StratEDI/Deasdvs/XML/Deasdv7.xml", "DEASDV", true);
                    result = result.replace(/ /g, '');
                    expect(result).toEqual(STRINGDEASDV7);
                });
                
            })
        })
    })
});
