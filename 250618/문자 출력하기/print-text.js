const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let str = '';
for(let i = 0 ; i < 8 ; i++){
    str +=input;
}
console.log(str)