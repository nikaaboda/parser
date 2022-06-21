const { PARSESTRING1, PARSESTRING2, PARSESTRING3, PARSESTRING4, PARSESTRING5, 
    PARSESTRING6, PARSESTRING7, PARSESTRING8, PARSESTRING9, PARSESTRING10,
    PARSESTRING11 } = require('../static/StratEDI/Orders/String-Orders.ts');


const allStrings = [ PARSESTRING1, PARSESTRING2, PARSESTRING3, PARSESTRING4, PARSESTRING5, 
    PARSESTRING6, PARSESTRING7, PARSESTRING8, PARSESTRING9, PARSESTRING10,
    PARSESTRING11];

const allChars = (arr: any[]) => {
    let allChars: any[] = [];

    arr.forEach(string => {
        for(let i = 0; i < string.length; i++) {
            if(!allChars.includes(string[i])) {
                allChars.push(string[i])
            }
        }
    });

    allChars.sort()

    return allChars
}

const result = allChars(allStrings)

console.log(result)