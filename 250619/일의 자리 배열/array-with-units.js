const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = '';

for(let i = 2 ; i < 10 ; i++){
    input.push((input[i-2] + input[i-1])%10);
}

for(let i of input){
    result += (i + ' ');
}

console.log(result);