const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split(' ');

const [a,b,c] = inputs.map(Number);

let str = ''

if(a <= b && a <=c){
    str += '1 '
}else{
    str += '0 '
}

if(a == b && b == c && c == a){
    str += '1';
}else{
    str += '0';
}

console.log(str);
