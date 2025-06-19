const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(inputs[0]);
const numbers = inputs[1].split(' ');
const number = numbers.map((n) => parseInt(n));

let result = '';
for(let i = 0 ; i < N ; i++){
    result += (number[i] ** 2 + ' ');
}

console.log(result);
