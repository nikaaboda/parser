// console.time("fullTime");
import {Writer} from '../src/Writer';
import { RAWINVOICE1 } from '../static/StratEDI/Invoices/Raw/String-Invoices';

const writer = new Writer();

console.time("parseTime");

const result = writer.write("../static/StratEDI/Deasdvs/XML/Deasdv4.xml", "DEASDV", true, "XML")

console.log(result);

// console.timeEnd("fullTime");