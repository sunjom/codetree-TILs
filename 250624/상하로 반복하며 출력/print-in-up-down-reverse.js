const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

const arr = Array(n).fill(0).map(() => Array(n));

for(let i=0 ; i < n ; i++){
    
    if(i % 2 == 0){
        for(let j = 0 ; j < n ; j++){
            arr[j][i] = j+1;
        }
    }else{
        let cnt = 1;
        for(let j = n-1 ; j > -1 ; j--){
            arr[j][i] = cnt;
            cnt++;
        }
    }
}

for(let i of arr){
    let str = '';
    for(let j of i){
        str += j;
    }
    console.log(str);
}