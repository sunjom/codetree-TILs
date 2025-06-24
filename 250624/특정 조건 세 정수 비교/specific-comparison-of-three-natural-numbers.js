const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split(' ');

const [a,b,c] = inputs.map(Number);

let str = ''
let check = true;
for(let i = 2 ; i < c ; i++){
    if(a%i === 0 && b%i === 0 && c % i ===0){
        check = false;
        str += '1 ';
        break;
    }
}

if(check){
    str += '0 ';
}

if(a == b && b == c && c == a){
    str += '1';
}else{
    str += '0';
}

console.log(str);
