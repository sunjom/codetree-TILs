const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(inputs[0]);
const arr = inputs[1].split(' ').map(Number);

let result = '';

for(let i = N-1 ; i > -1 ; i--){
    if(arr[i] % 2 == 0){
        result += (arr[i] + ' ');
    }    
}

console.log(result);