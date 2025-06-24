const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim();

const [h,w] = inputs.split(" ").map(Number);

let b = Math.floor((10000* w) / h**2);

if(b >= 25){
    console.log(b);
    console.log('Obesity')
}else{
    console.log(b);
}