console.time("fullTime");
import {Writer} from '../src/Writer';
import { RAWINVOICE1 } from '../static/StratEDI/Invoices/Raw/String-Invoices';

const writer = new Writer();

console.time("parseTime");

const result = writer.write("../static/StratEDI/Orders/XML/Order3.xml", "ORDER", true, "XML")

console.log(result);
// console.log(JSON.stringify(result, null, 2));
console.timeEnd("fullTime");