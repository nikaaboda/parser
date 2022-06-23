import { Reader } from "../src/Reader";

import { RAWORDER1, RAWORDER2, RAWORDER3, RAWORDER4, RAWORDER5, 
         RAWORDER6, RAWORDER7, RAWORDER8, RAWORDER9, RAWORDER10,
         RAWORDER11 } from '../static/StratEDI/Orders/String-Orders';

import { PARSEDORDER1, PARSEDORDER2, PARSEDORDER3, PARSEDORDER4, PARSEDORDER5,
         PARSEDORDER6, PARSEDORDER7, PARSEDORDER8, PARSEDORDER9, PARSEDORDER10,
          PARSEDORDER11, } from "../static/StratEDI/Parsed/Parsed-Orders";

import { RAWINVOICE1, RAWINVOICE2, RAWINVOICE3, RAWINVOICE4, RAWINVOICE5, 
         RAWINVOICE6, RAWINVOICE7, RAWINVOICE8, 
         RAWINVOICE9,} from '../static/StratEDI/Invoices/String-Invoices';

import { PARSEDINVOICE1, PARSEDINVOICE2, PARSEDINVOICE3, PARSEDINVOICE4, PARSEDINVOICE5,
         PARSEDINVOICE6, PARSEDINVOICE7, PARSEDINVOICE8, 
         PARSEDINVOICE9} from "../static/StratEDI/Parsed/Parsed-Invoices";

import { RAWDEASDV1, RAWDEASDV2, RAWDEASDV3, RAWDEASDV4, RAWDEASDV5, 
         RAWDEASDV6, RAWDEASDV7} from '../static/StratEDI/Deasdvs/String-Deasdvs';

import { PARSEDDEASDV1, PARSEDDEASDV2, PARSEDDEASDV3, PARSEDDEASDV4, PARSEDDEASDV5,
         PARSEDDEASDV6, PARSEDDEASDV7} from "../static/StratEDI/Parsed/Parsed-Deasdvs";




describe("Reader", () => {
    describe("Parsing StratEDI files", () => {
        describe("Order given as a string", () => {
            test("Parses Order 1 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWORDER1, "ORDER");
                expect(result).toEqual(PARSEDORDER1)
            })
    
            test("Parses Order 2 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWORDER2, "ORDER");
                expect(result).toEqual(PARSEDORDER2)
            })
    
            test("Parses Order 3 correctly", () => {
                const reader = new Reader();


                const result = reader.read(RAWORDER3, "ORDER");
                expect(result).toEqual(PARSEDORDER3)
            })
    
            test("Parses Order 4 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWORDER4, "ORDER");
                expect(result).toEqual(PARSEDORDER4)
            })
    
            test("Parses Order 5 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWORDER5, "ORDER");
                expect(result).toEqual(PARSEDORDER5)
            })
    
            test("Parses Order 6 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWORDER6, "ORDER");
                expect(result).toEqual(PARSEDORDER6)
            })
    
            test("Parses Order 7 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWORDER7, "ORDER");
                expect(result).toEqual(PARSEDORDER7)
            })
    
            test("Parses Order 8 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWORDER8, "ORDER")
                expect(result).toEqual(PARSEDORDER8)
            })
    
            test("Parses Order 9 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWORDER9, "ORDER");
                expect(result).toEqual(PARSEDORDER9)
            })
    
            test("Parses Order 10 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWORDER10, "ORDER");
                expect(result).toEqual(PARSEDORDER10)
            })
    
            test("Parses Order 11 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWORDER11, "ORDER");
                expect(result).toEqual(PARSEDORDER11)
            })
        });
    
        describe("Order given as a file path", () => {
            test("Parses Order 1 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order1.txt", "ORDER", true);
                expect(result).toEqual(PARSEDORDER1)
            })
    
            test("Parses Order 2 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order2.txt", "ORDER", true);
                expect(result).toEqual(PARSEDORDER2)
            })
    
            test("Parses Order 3 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order3.txt", "ORDER", true);
                expect(result).toEqual(PARSEDORDER3)
            })
    
            test("Parses Order 4 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order4.txt", "ORDER", true);
                expect(result).toEqual(PARSEDORDER4)
            })
    
            test("Parses Order 5 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order5.txt", "ORDER", true);
                expect(result).toEqual(PARSEDORDER5)
            })
    
            test("Parses Order 6 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order6.txt", "ORDER", true);
                expect(result).toEqual(PARSEDORDER6)
            })
    
            test("Parses Order 7 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order7.txt", "ORDER", true);
                expect(result).toEqual(PARSEDORDER7)
            })
    
            test("Parses Order 8 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order8.txt", "ORDER", true);
                expect(result).toEqual(PARSEDORDER8)
            })
    
            test("Parses Order 9 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order9.txt", "ORDER", true);
                expect(result).toEqual(PARSEDORDER9)
            })
    
            test("Parses Order 10 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order10.txt", "ORDER", true);
                expect(result).toEqual(PARSEDORDER10)
            })
    
            test("Parses Order 11 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Orders/Order11.txt", "ORDER", true);
                expect(result).toEqual(PARSEDORDER11)
            })
        });
        
        describe("Invoice given as a string", () => {
            test("Parses Invoice 1 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWINVOICE1, "INVOICE");
                expect(result).toEqual(PARSEDINVOICE1)
            })
    
            test("Parses Invoice 2 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWINVOICE2, "INVOICE");
                expect(result).toEqual(PARSEDINVOICE2)
            })
    
            test("Parses Invoice 3 correctly", () => {
                const reader = new Reader();


                const result = reader.read(RAWINVOICE3, "INVOICE");
                expect(result).toEqual(PARSEDINVOICE3)
            })
    
            test("Parses Invoice 4 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWINVOICE4, "INVOICE");
                expect(result).toEqual(PARSEDINVOICE4)
            })
    
            test("Parses Invoice 5 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWINVOICE5, "INVOICE");
                expect(result).toEqual(PARSEDINVOICE5)
            })
    
            test("Parses Invoice 6 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWINVOICE6, "INVOICE");
                expect(result).toEqual(PARSEDINVOICE6)
            })
    
            test("Parses Invoice 7 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWINVOICE7, "INVOICE");
                expect(result).toEqual(PARSEDINVOICE7)
            })
    
            test("Parses Invoice 8 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWINVOICE8, "INVOICE")
                expect(result).toEqual(PARSEDINVOICE8)
            })
    
            test("Parses Invoice 9 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWINVOICE9, "INVOICE");
                expect(result).toEqual(PARSEDINVOICE9)
            })
    
        });

        describe("Invoice given as a file path", () => {
            test("Parses Invoice 1 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Invoices/Invoice1.txt", "INVOICE", true);
                expect(result).toEqual(PARSEDINVOICE1)
            })
    
            test("Parses Invoice 2 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Invoices/Invoice2.txt", "INVOICE", true);
                expect(result).toEqual(PARSEDINVOICE2)
            })
    
            test("Parses Invoice 3 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Invoices/Invoice3.txt", "INVOICE", true);
                expect(result).toEqual(PARSEDINVOICE3)
            })
    
            test("Parses Invoice 4 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Invoices/Invoice4.txt", "INVOICE", true);
                expect(result).toEqual(PARSEDINVOICE4)
            })
    
            test("Parses Invoice 5 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Invoices/Invoice5.txt", "INVOICE", true);
                expect(result).toEqual(PARSEDINVOICE5)
            })
    
            test("Parses Invoice 6 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Invoices/Invoice6.txt", "INVOICE", true);
                expect(result).toEqual(PARSEDINVOICE6)
            })
    
            test("Parses Invoice 7 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Invoices/Invoice7.txt", "INVOICE", true);
                expect(result).toEqual(PARSEDINVOICE7)
            })
    
            test("Parses Invoice 8 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Invoices/Invoice8.txt", "INVOICE", true);
                expect(result).toEqual(PARSEDINVOICE8)
            })
    
            test("Parses Invoice 9 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Invoices/Invoice9.txt", "INVOICE", true);
                expect(result).toEqual(PARSEDINVOICE9)
            })
        });

        describe("Deasdv given as a string", () => {
            test("Parses Deasdv 1 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWDEASDV1, "DEASDV");
                expect(result).toEqual(PARSEDDEASDV1)
            })
    
            test("Parses Deasdv 2 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWDEASDV2, "DEASDV");
                expect(result).toEqual(PARSEDDEASDV2)
            })
    
            test("Parses Deasdv 3 correctly", () => {
                const reader = new Reader();


                const result = reader.read(RAWDEASDV3, "DEASDV");
                expect(result).toEqual(PARSEDDEASDV3)
            })
    
            test("Parses Deasdv 4 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWDEASDV4, "DEASDV");
                expect(result).toEqual(PARSEDDEASDV4)
            })
    
            test("Parses Deasdv 5 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWDEASDV5, "DEASDV");
                expect(result).toEqual(PARSEDDEASDV5)
            })
    
            test("Parses Deasdv 6 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWDEASDV6, "DEASDV");
                expect(result).toEqual(PARSEDDEASDV6)
            })
    
            test("Parses Deasdv 7 correctly", () => {
                const reader = new Reader();

                const result = reader.read(RAWDEASDV7, "DEASDV");
                expect(result).toEqual(PARSEDDEASDV7)
            })
    
        });

        describe("Deasdv given as a file path", () => {
            test("Parses Deasdv 1 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Deasdvs/Deasdv1.txt", "DEASDV", true);
                expect(result).toEqual(PARSEDDEASDV1)
            })
    
            test("Parses Deasdv 2 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Deasdvs/Deasdv2.txt", "DEASDV", true);
                expect(result).toEqual(PARSEDDEASDV2)
            })
    
            test("Parses Deasdv 3 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Deasdvs/Deasdv3.txt", "DEASDV", true);
                expect(result).toEqual(PARSEDDEASDV3)
            })
    
            test("Parses Deasdv 4 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Deasdvs/Deasdv4.txt", "DEASDV", true);
                expect(result).toEqual(PARSEDDEASDV4)
            })
    
            test("Parses Deasdv 5 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Deasdvs/Deasdv5.txt", "DEASDV", true);
                expect(result).toEqual(PARSEDDEASDV5)
            })
    
            test("Parses Deasdv 6 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Deasdvs/Deasdv6.txt", "DEASDV", true);
                expect(result).toEqual(PARSEDDEASDV6)
            })
    
            test("Parses Deasdv 7 correctly", () => {
                const reader = new Reader();

                const result = reader.read("../static/StratEDI/Deasdvs/Deasdv7.txt", "DEASDV", true);
                expect(result).toEqual(PARSEDDEASDV7)
            })
        });
    })
});


