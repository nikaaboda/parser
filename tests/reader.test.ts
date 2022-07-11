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
        describe("Order", () => {
            test("Parses Order 1 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "ORDER", RAWORDER1);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order1.xml").toString('utf-8'))
            })
    
            test("Parses Order 2 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "ORDER", RAWORDER2);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order2.xml").toString('utf-8'))
            })
    
            test("Parses Order 3 correctly", () => {
                const reader = new Reader();


                const result = reader.read("STRATEDI", "ORDER", RAWORDER3);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order3.xml").toString('utf-8'))
            })
    
            test("Parses Order 4 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "ORDER", RAWORDER4);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order4.xml").toString('utf-8'))
            })
    
            test("Parses Order 5 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "ORDER", RAWORDER5);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order5.xml").toString('utf-8'))
            })
    
            test("Parses Order 6 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "ORDER", RAWORDER6);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order6.xml").toString('utf-8'))
            })
    
            test("Parses Order 7 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "ORDER", RAWORDER7);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order7.xml").toString('utf-8'))
            })
    
            test("Parses Order 8 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "ORDER", RAWORDER8)
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order8.xml").toString('utf-8'))
            })
    
            test("Parses Order 9 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "ORDER", RAWORDER9);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order9.xml").toString('utf-8'))
            })
    
            test("Parses Order 10 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "ORDER", RAWORDER10);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order10.xml").toString('utf-8'))
            })
    
            test("Parses Order 11 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "ORDER", RAWORDER11);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Orders/XML/Order11.xml").toString('utf-8'))
            })
        });
        
        describe("Invoice", () => {
            test("Parses Invoice 1 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "INVOICE", RAWINVOICE1);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice1.xml").toString('utf-8'))
            })
    
            test("Parses Invoice 2 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "INVOICE", RAWINVOICE2);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice2.xml").toString('utf-8'))
            })
    
            test("Parses Invoice 3 correctly", () => {
                const reader = new Reader();


                const result = reader.read("STRATEDI", "INVOICE", RAWINVOICE3);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice3.xml").toString('utf-8'))
            })
    
            test("Parses Invoice 4 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "INVOICE", RAWINVOICE4);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice4.xml").toString('utf-8'))
            })
    
            test("Parses Invoice 5 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "INVOICE", RAWINVOICE5);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice5.xml").toString('utf-8'))
            })
    
            test("Parses Invoice 6 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "INVOICE", RAWINVOICE6);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice6.xml").toString('utf-8'))
            })
    
            test("Parses Invoice 7 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "INVOICE", RAWINVOICE7);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice7.xml").toString('utf-8'))
            })
    
            test("Parses Invoice 8 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "INVOICE", RAWINVOICE8)
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice8.xml").toString('utf-8'))
            })
    
            test("Parses Invoice 9 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "INVOICE", RAWINVOICE9);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Invoices/XML/Invoice9.xml").toString('utf-8'))
            })
    
        });

        describe("Deasdv", () => {
            test("Parses Deasdv 1 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "DEASDV", RAWDEASDV1);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv1.xml").toString('utf-8'))
            })
    
            test("Parses Deasdv 2 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "DEASDV", RAWDEASDV2);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv2.xml").toString('utf-8'))
            })
    
            test("Parses Deasdv 3 correctly", () => {
                const reader = new Reader();


                const result = reader.read("STRATEDI", "DEASDV", RAWDEASDV3);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv3.xml").toString('utf-8'))
            })
    
            test("Parses Deasdv 4 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "DEASDV", RAWDEASDV4);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv4.xml").toString('utf-8'))
            })
    
            test("Parses Deasdv 5 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "DEASDV", RAWDEASDV5);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv5.xml").toString('utf-8'))
            })
    
            test("Parses Deasdv 6 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "DEASDV", RAWDEASDV6);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv6.xml").toString('utf-8'))
            })
    
            test("Parses Deasdv 7 correctly", () => {
                const reader = new Reader();

                const result = reader.read("STRATEDI", "DEASDV", RAWDEASDV7);
                expect(result.file).toEqual(fs.readFileSync("../static/StratEDI/Deasdvs/XML/Deasdv7.xml").toString('utf-8'))
            })
    
        });
    })
});


