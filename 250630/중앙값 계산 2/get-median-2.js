const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

const arr1 = [];
let str = '';
for(let i = 0 ; i < n ; i++){
    arr1.push(arr[i]);
    if(i % 2 == 0){
        arr1.sort((a,b) => a-b);
        str += arr1[Math.floor(arr1.length / 2)] + ' ';
    }
}

console.log(str);