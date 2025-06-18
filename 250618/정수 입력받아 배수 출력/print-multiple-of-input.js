const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const data = Number(input);

let result = "";
for(let i = 1 ; i < 6 ; i++){
    result += (data*i + " ");
}

console.log(result);