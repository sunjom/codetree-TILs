const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

const arr = [];
for(let i = 0 ; i < n ; i++){
    const row = [];

    for(let j = 1 ; j <= n ; j++){
        row.push(j);
    }

    if(i%2 === 1){
        row.reverse();
    }
    arr.push(row);
}

for(let i of arr){
    str = '';
    for(let e of i){
        str += e;
    }
    console.log(str);
}