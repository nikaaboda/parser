// console.time("fullTime");
import {Reader} from '../src/Reader';
import { RAWINVOICE1 } from '../static/StratEDI/Invoices/Raw/String-Invoices';

const reader = new Reader();

console.time("parseTime");

const result = reader.read("../static/StratEDI/Invoices/Raw/Invoice9.txt",  "INVOICE", true)

// console.log(result.file)
// console.log(JSON.stringify(result, null, 2));
// console.timeEnd("fullTime");