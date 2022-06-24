console.time("fullTime");
import {Reader} from '../src/Reader';
import { RAWINVOICE1 } from '../static/StratEDI/Invoices/String-Invoices';

const reader = new Reader();

console.time("parseTime");

const result = reader.read("../static/StratEDI/Orders/Order11.txt", "ORDER", true, "JSON")

console.log(JSON.stringify(result, null, 2));
console.timeEnd("fullTime");