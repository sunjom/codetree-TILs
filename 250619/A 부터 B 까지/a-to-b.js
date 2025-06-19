const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split(' ');

let A = Number(inputs[0]);
const B = Number(inputs[1]);

let result = ''
while(A < B){
    result += (A +' ');
    if(A % 2 == 1){
        A *=2;
    }else{
        A +=3;
    }
}

console.log(result);