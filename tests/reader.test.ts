import { Reader } from "../src/Reader";

import { RAWORDER1, RAWORDER2, RAWORDER3, RAWORDER4, RAWORDER5, 
         RAWORDER6, RAWORDER7, RAWORDER8, RAWORDER9, RAWORDER10,
         RAWORDER11 } from '../static/StratEDI/Orders/Raw/String-Orders';

import { PARSEDJSONORDER1, PARSEDJSONORDER2, PARSEDJSONORDER3, PARSEDJSONORDER4, PARSEDJSONORDER5,
         PARSEDJSONORDER6, PARSEDJSONORDER7, PARSEDJSONORDER8, PARSEDJSONORDER9, PARSEDJSONORDER10,
         PARSEDJSONORDER11, } from "../static/StratEDI/Parsed/JSON/Parsed-Orders";

import { PARSEDXMLORDER1, PARSEDXMLORDER2, PARSEDXMLORDER3, PARSEDXMLORDER4, PARSEDXMLORDER5,
         PARSEDXMLORDER6, PARSEDXMLORDER7, PARSEDXMLORDER8, PARSEDXMLORDER9, PARSEDXMLORDER10,
          PARSEDXMLORDER11, } from "../static/StratEDI/Parsed/XML/Parsed-Orders";

import { RAWINVOICE1, RAWINVOICE2, RAWINVOICE3, RAWINVOICE4, RAWINVOICE5, 
         RAWINVOICE6, RAWINVOICE7, RAWINVOICE8, 
         RAWINVOICE9,} from '../static/StratEDI/Invoices/Raw/String-Invoices';

import { PARSEDJSONINVOICE1, PARSEDJSONINVOICE2, PARSEDJSONINVOICE3, PARSEDJSONINVOICE4, PARSEDJSONINVOICE5,
         PARSEDJSONINVOICE6, PARSEDJSONINVOICE7, PARSEDJSONINVOICE8, 
         PARSEDJSONINVOICE9} from "../static/StratEDI/Parsed/JSON/Parsed-Invoices";

import { PARSEDXMLINVOICE1, PARSEDXMLINVOICE2, PARSEDXMLINVOICE3, PARSEDXMLINVOICE4, PARSEDXMLINVOICE5,
         PARSEDXMLINVOICE6, PARSEDXMLINVOICE7, PARSEDXMLINVOICE8, 
         PARSEDXMLINVOICE9} from "../static/StratEDI/Parsed/XML/Parsed-Invoices";

import { RAWDEASDV1, RAWDEASDV2, RAWDEASDV3, RAWDEASDV4, RAWDEASDV5, 
         RAWDEASDV6, RAWDEASDV7} from '../static/StratEDI/Deasdvs/Raw/String-Deasdvs';

import { PARSEDJSONDEASDV1, PARSEDJSONDEASDV2, PARSEDJSONDEASDV3, PARSEDJSONDEASDV4, PARSEDJSONDEASDV5,
         PARSEDJSONDEASDV6, PARSEDJSONDEASDV7} from "../static/StratEDI/Parsed/JSON/Parsed-Deasdvs";

import { PARSEDXMLDEASDV1, PARSEDXMLDEASDV2, PARSEDXMLDEASDV3, PARSEDXMLDEASDV4, PARSEDXMLDEASDV5,
         PARSEDXMLDEASDV6, PARSEDXMLDEASDV7} from "../static/StratEDI/Parsed/XML/Parsed-Deasdvs";




describe("Reader", () => {
    describe("Parsing StratEDI files", () => {
        describe("Parsing to JSON", () => {
            describe("Order given as a string", () => {
                test("Parses Order 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER1, "ORDER");
                    expect(result).toEqual(PARSEDJSONORDER1)
                })
        
                test("Parses Order 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER2, "ORDER");
                    expect(result).toEqual(PARSEDJSONORDER2)
                })
        
                test("Parses Order 3 correctly", () => {
                    const reader = new Reader();
    
    
                    const result = reader.read(RAWORDER3, "ORDER");
                    expect(result).toEqual(PARSEDJSONORDER3)
                })
        
                test("Parses Order 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER4, "ORDER");
                    expect(result).toEqual(PARSEDJSONORDER4)
                })
        
                test("Parses Order 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER5, "ORDER");
                    expect(result).toEqual(PARSEDJSONORDER5)
                })
        
                test("Parses Order 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER6, "ORDER");
                    expect(result).toEqual(PARSEDJSONORDER6)
                })
        
                test("Parses Order 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER7, "ORDER");
                    expect(result).toEqual(PARSEDJSONORDER7)
                })
        
                test("Parses Order 8 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER8, "ORDER")
                    expect(result).toEqual(PARSEDJSONORDER8)
                })
        
                test("Parses Order 9 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER9, "ORDER");
                    expect(result).toEqual(PARSEDJSONORDER9)
                })
        
                test("Parses Order 10 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER10, "ORDER");
                    expect(result).toEqual(PARSEDJSONORDER10)
                })
        
                test("Parses Order 11 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER11, "ORDER");
                    expect(result).toEqual(PARSEDJSONORDER11)
                })
            });
        
            describe("Order given as a file path", () => {
                test("Parses Order 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order1.txt", "ORDER", true);
                    expect(result).toEqual(PARSEDJSONORDER1)
                })
        
                test("Parses Order 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order2.txt", "ORDER", true);
                    expect(result).toEqual(PARSEDJSONORDER2)
                })
        
                test("Parses Order 3 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order3.txt", "ORDER", true);
                    expect(result).toEqual(PARSEDJSONORDER3)
                })
        
                test("Parses Order 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order4.txt", "ORDER", true);
                    expect(result).toEqual(PARSEDJSONORDER4)
                })
        
                test("Parses Order 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order5.txt", "ORDER", true);
                    expect(result).toEqual(PARSEDJSONORDER5)
                })
        
                test("Parses Order 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order6.txt", "ORDER", true);
                    expect(result).toEqual(PARSEDJSONORDER6)
                })
        
                test("Parses Order 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order7.txt", "ORDER", true);
                    expect(result).toEqual(PARSEDJSONORDER7)
                })
        
                test("Parses Order 8 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order8.txt", "ORDER", true);
                    expect(result).toEqual(PARSEDJSONORDER8)
                })
        
                test("Parses Order 9 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order9.txt", "ORDER", true);
                    expect(result).toEqual(PARSEDJSONORDER9)
                })
        
                test("Parses Order 10 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order10.txt", "ORDER", true);
                    expect(result).toEqual(PARSEDJSONORDER10)
                })
        
                test("Parses Order 11 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order11.txt", "ORDER", true);
                    expect(result).toEqual(PARSEDJSONORDER11)
                })
            });
            
            describe("Invoice given as a string", () => {
                test("Parses Invoice 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE1, "INVOICE");
                    expect(result).toEqual(PARSEDJSONINVOICE1)
                })
        
                test("Parses Invoice 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE2, "INVOICE");
                    expect(result).toEqual(PARSEDJSONINVOICE2)
                })
        
                test("Parses Invoice 3 correctly", () => {
                    const reader = new Reader();
    
    
                    const result = reader.read(RAWINVOICE3, "INVOICE");
                    expect(result).toEqual(PARSEDJSONINVOICE3)
                })
        
                test("Parses Invoice 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE4, "INVOICE");
                    expect(result).toEqual(PARSEDJSONINVOICE4)
                })
        
                test("Parses Invoice 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE5, "INVOICE");
                    expect(result).toEqual(PARSEDJSONINVOICE5)
                })
        
                test("Parses Invoice 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE6, "INVOICE");
                    expect(result).toEqual(PARSEDJSONINVOICE6)
                })
        
                test("Parses Invoice 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE7, "INVOICE");
                    expect(result).toEqual(PARSEDJSONINVOICE7)
                })
        
                test("Parses Invoice 8 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE8, "INVOICE")
                    expect(result).toEqual(PARSEDJSONINVOICE8)
                })
        
                test("Parses Invoice 9 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE9, "INVOICE");
                    expect(result).toEqual(PARSEDJSONINVOICE9)
                })
        
            });
    
            describe("Invoice given as a file path", () => {
                test("Parses Invoice 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice1.txt", "INVOICE", true);
                    expect(result).toEqual(PARSEDJSONINVOICE1)
                })
        
                test("Parses Invoice 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice2.txt", "INVOICE", true);
                    expect(result).toEqual(PARSEDJSONINVOICE2)
                })
        
                test("Parses Invoice 3 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice3.txt", "INVOICE", true);
                    expect(result).toEqual(PARSEDJSONINVOICE3)
                })
        
                test("Parses Invoice 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice4.txt", "INVOICE", true);
                    expect(result).toEqual(PARSEDJSONINVOICE4)
                })
        
                test("Parses Invoice 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice5.txt", "INVOICE", true);
                    expect(result).toEqual(PARSEDJSONINVOICE5)
                })
        
                test("Parses Invoice 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice6.txt", "INVOICE", true);
                    expect(result).toEqual(PARSEDJSONINVOICE6)
                })
        
                test("Parses Invoice 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice7.txt", "INVOICE", true);
                    expect(result).toEqual(PARSEDJSONINVOICE7)
                })
        
                test("Parses Invoice 8 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice8.txt", "INVOICE", true);
                    expect(result).toEqual(PARSEDJSONINVOICE8)
                })
        
                test("Parses Invoice 9 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice9.txt", "INVOICE", true);
                    expect(result).toEqual(PARSEDJSONINVOICE9)
                })
            });
    
            describe("Deasdv given as a string", () => {
                test("Parses Deasdv 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV1, "DEASDV");
                    expect(result).toEqual(PARSEDJSONDEASDV1)
                })
        
                test("Parses Deasdv 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV2, "DEASDV");
                    expect(result).toEqual(PARSEDJSONDEASDV2)
                })
        
                test("Parses Deasdv 3 correctly", () => {
                    const reader = new Reader();
    
    
                    const result = reader.read(RAWDEASDV3, "DEASDV");
                    expect(result).toEqual(PARSEDJSONDEASDV3)
                })
        
                test("Parses Deasdv 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV4, "DEASDV");
                    expect(result).toEqual(PARSEDJSONDEASDV4)
                })
        
                test("Parses Deasdv 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV5, "DEASDV");
                    expect(result).toEqual(PARSEDJSONDEASDV5)
                })
        
                test("Parses Deasdv 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV6, "DEASDV");
                    expect(result).toEqual(PARSEDJSONDEASDV6)
                })
        
                test("Parses Deasdv 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV7, "DEASDV");
                    expect(result).toEqual(PARSEDJSONDEASDV7)
                })
        
            });
    
            describe("Deasdv given as a file path", () => {
                test("Parses Deasdv 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv1.txt", "DEASDV", true);
                    expect(result).toEqual(PARSEDJSONDEASDV1)
                })
        
                test("Parses Deasdv 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv2.txt", "DEASDV", true);
                    expect(result).toEqual(PARSEDJSONDEASDV2)
                })
        
                test("Parses Deasdv 3 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv3.txt", "DEASDV", true);
                    expect(result).toEqual(PARSEDJSONDEASDV3)
                })
        
                test("Parses Deasdv 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv4.txt", "DEASDV", true);
                    expect(result).toEqual(PARSEDJSONDEASDV4)
                })
        
                test("Parses Deasdv 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv5.txt", "DEASDV", true);
                    expect(result).toEqual(PARSEDJSONDEASDV5)
                })
        
                test("Parses Deasdv 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv6.txt", "DEASDV", true);
                    expect(result).toEqual(PARSEDJSONDEASDV6)
                })
        
                test("Parses Deasdv 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv7.txt", "DEASDV", true);
                    expect(result).toEqual(PARSEDJSONDEASDV7)
                })
            });
        })

        describe("Parsing to XML", () => {
            describe("Order given as a string", () => {
                test("Parses Order 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER1, "ORDER", false, "XML");
                    expect(result).toEqual(PARSEDXMLORDER1)
                })
        
                test("Parses Order 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER2, "ORDER", false, "XML");
                    expect(result).toEqual(PARSEDXMLORDER2)
                })
        
                test("Parses Order 3 correctly", () => {
                    const reader = new Reader();
    
    
                    const result = reader.read(RAWORDER3, "ORDER", false, "XML");
                    expect(result).toEqual(PARSEDXMLORDER3)
                })
        
                test("Parses Order 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER4, "ORDER", false, "XML");
                    expect(result).toEqual(PARSEDXMLORDER4)
                })
        
                test("Parses Order 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER5, "ORDER", false, "XML");
                    expect(result).toEqual(PARSEDXMLORDER5)
                })
        
                test("Parses Order 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER6, "ORDER", false, "XML");
                    expect(result).toEqual(PARSEDXMLORDER6)
                })
        
                test("Parses Order 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER7, "ORDER", false, "XML");
                    expect(result).toEqual(PARSEDXMLORDER7)
                })
        
                test("Parses Order 8 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER8, "ORDER", false, "XML")
                    expect(result).toEqual(PARSEDXMLORDER8)
                })
        
                test("Parses Order 9 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER9, "ORDER", false, "XML");
                    expect(result).toEqual(PARSEDXMLORDER9)
                })
        
                test("Parses Order 10 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER10, "ORDER", false, "XML");
                    expect(result).toEqual(PARSEDXMLORDER10)
                })
        
                test("Parses Order 11 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER11, "ORDER", false, "XML");
                    expect(result).toEqual(PARSEDXMLORDER11)
                })
            });
        
            describe("Order given as a file path", () => {
                test("Parses Order 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order1.txt", "ORDER", true, "XML");
                    expect(result).toEqual(PARSEDXMLORDER1)
                })
        
                test("Parses Order 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order2.txt", "ORDER", true, "XML");
                    expect(result).toEqual(PARSEDXMLORDER2)
                })
        
                test("Parses Order 3 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order3.txt", "ORDER", true, "XML");
                    expect(result).toEqual(PARSEDXMLORDER3)
                })
        
                test("Parses Order 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order4.txt", "ORDER", true, "XML");
                    expect(result).toEqual(PARSEDXMLORDER4)
                })
        
                test("Parses Order 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order5.txt", "ORDER", true, "XML");
                    expect(result).toEqual(PARSEDXMLORDER5)
                })
        
                test("Parses Order 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order6.txt", "ORDER", true, "XML");
                    expect(result).toEqual(PARSEDXMLORDER6)
                })
        
                test("Parses Order 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order7.txt", "ORDER", true, "XML");
                    expect(result).toEqual(PARSEDXMLORDER7)
                })
        
                test("Parses Order 8 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order8.txt", "ORDER", true, "XML");
                    expect(result).toEqual(PARSEDXMLORDER8)
                })
        
                test("Parses Order 9 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order9.txt", "ORDER", true, "XML");
                    expect(result).toEqual(PARSEDXMLORDER9)
                })
        
                test("Parses Order 10 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order10.txt", "ORDER", true, "XML");
                    expect(result).toEqual(PARSEDXMLORDER10)
                })
        
                test("Parses Order 11 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order11.txt", "ORDER", true, "XML");
                    expect(result).toEqual(PARSEDXMLORDER11)
                })
            });
            
            describe("Invoice given as a string", () => {
                test("Parses Invoice 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE1, "INVOICE", false, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE1)
                })
        
                test("Parses Invoice 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE2, "INVOICE", false, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE2)
                })
        
                test("Parses Invoice 3 correctly", () => {
                    const reader = new Reader();
    
    
                    const result = reader.read(RAWINVOICE3, "INVOICE", false, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE3)
                })
        
                test("Parses Invoice 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE4, "INVOICE", false, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE4)
                })
        
                test("Parses Invoice 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE5, "INVOICE", false, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE5)
                })
        
                test("Parses Invoice 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE6, "INVOICE", false, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE6)
                })
        
                test("Parses Invoice 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE7, "INVOICE", false, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE7)
                })
        
                test("Parses Invoice 8 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE8, "INVOICE", false, "XML")
                    expect(result).toEqual(PARSEDXMLINVOICE8)
                })
        
                test("Parses Invoice 9 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE9, "INVOICE", false, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE9)
                })
        
            });
    
            describe("Invoice given as a file path", () => {
                test("Parses Invoice 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice1.txt", "INVOICE", true, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE1)
                })
        
                test("Parses Invoice 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice2.txt", "INVOICE", true, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE2)
                })
        
                test("Parses Invoice 3 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice3.txt", "INVOICE", true, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE3)
                })
        
                test("Parses Invoice 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice4.txt", "INVOICE", true, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE4)
                })
        
                test("Parses Invoice 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice5.txt", "INVOICE", true, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE5)
                })
        
                test("Parses Invoice 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice6.txt", "INVOICE", true, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE6)
                })
        
                test("Parses Invoice 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice7.txt", "INVOICE", true, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE7)
                })
        
                test("Parses Invoice 8 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice8.txt", "INVOICE", true, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE8)
                })
        
                test("Parses Invoice 9 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice9.txt", "INVOICE", true, "XML");
                    expect(result).toEqual(PARSEDXMLINVOICE9)
                })
            });
    
            describe("Deasdv given as a string", () => {
                test("Parses Deasdv 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV1, "DEASDV", false, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV1)
                })
        
                test("Parses Deasdv 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV2, "DEASDV", false, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV2)
                })
        
                test("Parses Deasdv 3 correctly", () => {
                    const reader = new Reader();
    
    
                    const result = reader.read(RAWDEASDV3, "DEASDV", false, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV3)
                })
        
                test("Parses Deasdv 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV4, "DEASDV", false, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV4)
                })
        
                test("Parses Deasdv 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV5, "DEASDV", false, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV5)
                })
        
                test("Parses Deasdv 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV6, "DEASDV", false, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV6)
                })
        
                test("Parses Deasdv 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV7, "DEASDV", false, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV7)
                })
        
            });
    
            describe("Deasdv given as a file path", () => {
                test("Parses Deasdv 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv1.txt", "DEASDV", true, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV1)
                })
        
                test("Parses Deasdv 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv2.txt", "DEASDV", true, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV2)
                })
        
                test("Parses Deasdv 3 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv3.txt", "DEASDV", true, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV3)
                })
        
                test("Parses Deasdv 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv4.txt", "DEASDV", true, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV4)
                })
        
                test("Parses Deasdv 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv5.txt", "DEASDV", true, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV5)
                })
        
                test("Parses Deasdv 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv6.txt", "DEASDV", true, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV6)
                })
        
                test("Parses Deasdv 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv7.txt", "DEASDV", true, "XML");
                    expect(result).toEqual(PARSEDXMLDEASDV7)
                })
            });
        })
    })
});


