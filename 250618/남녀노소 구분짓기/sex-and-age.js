const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split('\n');

const a = Number(inputs[0]);
const b = Number(inputs[1]);

if(a == 0){
    if(b >= 19){
        console.log('MAN');
    }else{
        console.log("BOY");
    }
}else{
    if(b >= 19){
        console.log('WOMAN');
    }else{
        console.log("GIRL");
    }
}