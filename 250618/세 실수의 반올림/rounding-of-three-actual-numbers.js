const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split('\n');
let a = Number(inputs[0]).toFixed(3);
let b = Number(inputs[1]).toFixed(3);
let c = Number(inputs[2]).toFixed(3);

console.log(a);
console.log(b);
console.log(c);

