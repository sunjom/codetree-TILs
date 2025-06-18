const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(inputs[0]);
let b = Number(inputs[1]);
console.log(b,a);