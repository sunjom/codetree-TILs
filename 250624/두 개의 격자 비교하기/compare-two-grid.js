const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = inputs[0].split(' ').map(Number);

const arr = Array(n).fill(0).map(() => Array(m));
const brr = Array(n).fill(0).map(() => Array(m));

for(let i = 1 ; i < inputs.length ; i++){
    inputs[i] = inputs[i].split(' ').map(Number);
}

for(let i = 1 ; i < inputs.length; i++){
    if(i < n+1){
        arr[i-1] = inputs[i];
    }else{
        brr[i-1-n] = inputs[i];
    }
}

for(let i = 0 ; i < n ; i++){
    let str = '';
    for(let e = 0 ; e < m ; e++){
        if(arr[i][e] == brr[i][e]){
            str += '0 ';
        }else{
            str += '1 ';
        }
    }
    console.log(str);
}