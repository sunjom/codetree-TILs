const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split(' ');

const a = Number(inputs[0]);
const b = Number(inputs[1]);
const c = Number(inputs[2]);

if(a > b){
    if(a < c){
        console.log(a);
    }else{
        console.log(c);
    }
}else{
    if(b < c){
        console.log(b);
    }else{
        console.log(c);
    }
}