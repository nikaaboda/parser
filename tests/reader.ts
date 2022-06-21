console.time("fullTime");
import {Reader} from '../src/Reader';
import { PARSESTRING2 } from '../static/StratEDI/Orders/String-Orders';

const reader = new Reader();

console.time("parseTime");
const result = reader.read("../static/StratEDI/Invoices/Invoice1.txt", "INVOICE", true);
console.timeEnd("parseTime");

console.log(JSON.stringify(result, null, 2));
console.timeEnd("fullTime");