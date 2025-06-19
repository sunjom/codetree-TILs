const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split(' ');

let result = '';
inputs.reverse();

for(let i = 0 ; i < inputs.length ; i++){
    result += inputs[i];
}

console.log(result);