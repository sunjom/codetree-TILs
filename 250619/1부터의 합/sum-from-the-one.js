const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const N = Number(input);

let result = 0;

for(let i = 1 ; i < 101 ; i++){
    result += i;
    if(result >= N){
        console.log(i);
        break;
    }
}