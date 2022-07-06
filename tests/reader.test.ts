import fs from "fs"
import { Reader } from "../src/Reader";

import { RAWORDER1, RAWORDER2, RAWORDER3, RAWORDER4, RAWORDER5, 
         RAWORDER6, RAWORDER7, RAWORDER8, RAWORDER9, RAWORDER10,
         RAWORDER11 } from '../static/StratEDI/Orders/Raw/String-Orders';

import { RAWINVOICE1, RAWINVOICE2, RAWINVOICE3, RAWINVOICE4, RAWINVOICE5, 
         RAWINVOICE6, RAWINVOICE7, RAWINVOICE8, 
         RAWINVOICE9,} from '../static/StratEDI/Invoices/Raw/String-Invoices';

import { RAWDEASDV1, RAWDEASDV2, RAWDEASDV3, RAWDEASDV4, RAWDEASDV5, 
         RAWDEASDV6, RAWDEASDV7} from '../static/StratEDI/Deasdvs/Raw/String-Deasdvs';





describe("Reader", () => {
    describe("Parsing StratEDI files", () => {
        describe("Parsing to XML", () => {
            describe("Order given as a string", () => {
                test("Parses Order 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER1, "ORDER", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order1.xml").toString('utf-8'))
                })
        
                test("Parses Order 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER2, "ORDER", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order2.xml").toString('utf-8'))
                })
        
                test("Parses Order 3 correctly", () => {
                    const reader = new Reader();
    
    
                    const result = reader.read(RAWORDER3, "ORDER", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order3.xml").toString('utf-8'))
                })
        
                test("Parses Order 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER4, "ORDER", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order4.xml").toString('utf-8'))
                })
        
                test("Parses Order 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER5, "ORDER", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order5.xml").toString('utf-8'))
                })
        
                test("Parses Order 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER6, "ORDER", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order6.xml").toString('utf-8'))
                })
        
                test("Parses Order 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER7, "ORDER", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order7.xml").toString('utf-8'))
                })
        
                test("Parses Order 8 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER8, "ORDER", false, "XML")
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order8.xml").toString('utf-8'))
                })
        
                test("Parses Order 9 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER9, "ORDER", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order9.xml").toString('utf-8'))
                })
        
                test("Parses Order 10 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER10, "ORDER", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order10.xml").toString('utf-8'))
                })
        
                test("Parses Order 11 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWORDER11, "ORDER", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order11.xml").toString('utf-8'))
                })
            });
        
            describe("Order given as a file path", () => {
                test("Parses Order 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order1.txt", "ORDER", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order1.xml").toString('utf-8'))
                })
        
                test("Parses Order 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order2.txt", "ORDER", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order2.xml").toString('utf-8'))
                })
        
                test("Parses Order 3 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order3.txt", "ORDER", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order3.xml").toString('utf-8'))
                })
        
                test("Parses Order 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order4.txt", "ORDER", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order4.xml").toString('utf-8'))
                })
        
                test("Parses Order 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order5.txt", "ORDER", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order5.xml").toString('utf-8'))
                })
        
                test("Parses Order 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order6.txt", "ORDER", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order6.xml").toString('utf-8'))
                })
        
                test("Parses Order 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order7.txt", "ORDER", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order7.xml").toString('utf-8'))
                })
        
                test("Parses Order 8 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order8.txt", "ORDER", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order8.xml").toString('utf-8'))
                })
        
                test("Parses Order 9 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order9.txt", "ORDER", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order9.xml").toString('utf-8'))
                })
        
                test("Parses Order 10 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order10.txt", "ORDER", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order10.xml").toString('utf-8'))
                })
        
                test("Parses Order 11 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Orders/Raw/Order11.txt", "ORDER", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order11.xml").toString('utf-8'))
                })
            });
            
            describe("Invoice given as a string", () => {
                test("Parses Invoice 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE1, "INVOICE", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice1.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE2, "INVOICE", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice2.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 3 correctly", () => {
                    const reader = new Reader();
    
    
                    const result = reader.read(RAWINVOICE3, "INVOICE", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice3.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE4, "INVOICE", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice4.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE5, "INVOICE", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice5.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE6, "INVOICE", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice6.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE7, "INVOICE", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice7.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 8 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE8, "INVOICE", false, "XML")
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice8.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 9 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWINVOICE9, "INVOICE", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice9.xml").toString('utf-8'))
                })
        
            });
    
            describe("Invoice given as a file path", () => {
                test("Parses Invoice 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice1.txt", "INVOICE", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice1.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice2.txt", "INVOICE", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice2.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 3 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice3.txt", "INVOICE", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice3.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice4.txt", "INVOICE", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice4.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice5.txt", "INVOICE", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice5.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice6.txt", "INVOICE", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice6.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice7.txt", "INVOICE", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice7.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 8 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice8.txt", "INVOICE", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice8.xml").toString('utf-8'))
                })
        
                test("Parses Invoice 9 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice9.txt", "INVOICE", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice9.xml").toString('utf-8'))
                })
            });
    
            describe("Deasdv given as a string", () => {
                test("Parses Deasdv 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV1, "DEASDV", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv1.xml").toString('utf-8'))
                })
        
                test("Parses Deasdv 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV2, "DEASDV", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv2.xml").toString('utf-8'))
                })
        
                test("Parses Deasdv 3 correctly", () => {
                    const reader = new Reader();
    
    
                    const result = reader.read(RAWDEASDV3, "DEASDV", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv3.xml").toString('utf-8'))
                })
        
                test("Parses Deasdv 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV4, "DEASDV", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv4.xml").toString('utf-8'))
                })
        
                test("Parses Deasdv 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV5, "DEASDV", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv5.xml").toString('utf-8'))
                })
        
                test("Parses Deasdv 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV6, "DEASDV", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv6.xml").toString('utf-8'))
                })
        
                test("Parses Deasdv 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read(RAWDEASDV7, "DEASDV", false, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv7.xml").toString('utf-8'))
                })
        
            });
    
            describe("Deasdv given as a file path", () => {
                test("Parses Deasdv 1 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv1.txt", "DEASDV", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv1.xml").toString('utf-8'))
                })
        
                test("Parses Deasdv 2 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv2.txt", "DEASDV", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv2.xml").toString('utf-8'))
                })
        
                test("Parses Deasdv 3 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv3.txt", "DEASDV", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv3.xml").toString('utf-8'))
                })
        
                test("Parses Deasdv 4 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv4.txt", "DEASDV", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv4.xml").toString('utf-8'))
                })
        
                test("Parses Deasdv 5 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv5.txt", "DEASDV", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv5.xml").toString('utf-8'))
                })
        
                test("Parses Deasdv 6 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv6.txt", "DEASDV", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv6.xml").toString('utf-8'))
                })
        
                test("Parses Deasdv 7 correctly", () => {
                    const reader = new Reader();
    
                    const result = reader.read("../static/StratEDI/Deasdvs/Raw/Deasdv7.txt", "DEASDV", true, "XML");
                    expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv7.xml").toString('utf-8'))
                })
            });
        })
    })
});


