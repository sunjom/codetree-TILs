const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const data = Number(input);

if((data % 3 == 0 && data % 2 != 0)|| (data % 2 == 0 && data % 5 == 0)){
    console.log('true')
}else{
    console.log('false');
}