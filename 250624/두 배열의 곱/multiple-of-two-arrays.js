const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split('\n');

let a = [];
let b = [];
let answer = [];

for(let i = 0 ; i < 3 ; i++){
    a.push([0,0,0]);
    b.push([0,0,0]);
    answer.push([0,0,0]);
}


for(let i = 0 ; i < inputs.length ; i++){
    if(i < 3){
        a[i] = inputs[i].split(" ").map(Number);
    }
    if(i > 3){
        b[i-4] = inputs[i].split(" ").map(Number);
    }
}



for(let i = 0 ; i < 3 ; i++){
    let str = '';
    for(let e = 0 ; e < 3 ; e++){
        str += (a[i][e] * b[i][e] + ' ');
    }
    console.log(str);
}