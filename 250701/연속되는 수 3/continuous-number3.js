const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

let cnt = 1;
let max = 1;

for(let i = 0 ; i < arr.length-1; i++){
    if((arr[i] > 0 && arr[i+1] > 0) || (arr[i] < 0 && arr[i+1] < 0)){
        cnt +=1;
    }else{
        cnt = 1;
    }
    max = Math.max(max,cnt);
}

console.log(max);