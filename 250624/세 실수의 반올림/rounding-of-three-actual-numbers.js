const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split('\n');

for(let i of inputs){
    i = Number(i);
    console.log(i.toFixed(3));
}