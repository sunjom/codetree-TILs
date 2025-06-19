const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const N = Number(input[0]);

let result = 1;

for(let i = 2 ; i < 101 ; i++){
    const dummy = result + i;
    if(dummy >= N){
        console.log(result);
        break;
    }
    result += i;
}