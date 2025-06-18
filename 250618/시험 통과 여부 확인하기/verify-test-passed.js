const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const data = Number(input);

if(data >= 80){
    console.log('pass');
}else{
    console.log(`${80-data} more score`);
}