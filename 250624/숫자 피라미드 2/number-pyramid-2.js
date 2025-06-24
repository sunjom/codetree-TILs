const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

let count = 0;

for(let i = 1 ; i <= num ; i++){
    let str = '';
    for(let e = 0 ; e < i ;  e++){
        str += (++count + ' ');
    }
    console.log(str);
}
