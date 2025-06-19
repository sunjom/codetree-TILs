const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split(' ');

let A = Number(inputs[0]);
const B = Number(inputs[1]);

let result = (A + ' ');
while(A < B){
    if(A % 2 == 1){
        A *=2;
    }else{
        A +=3;
    }
    result += (A +' ');
}

console.log(result);