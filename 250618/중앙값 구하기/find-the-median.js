const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split(' ');

const a = Number(inputs[0]);
const b = Number(inputs[1]);
const c = Number(inputs[2]);

if(a > b){
    if(b > c){
        console.log(b)
    }else if(c > a){
        console.log(a)
    }else{
        console.log(c);
    }
}else{
    if(c > b){
        console.log(b);
    }else if(c > a){
        console.log(c);
    }elses{
        console.log(a);
    }
}