const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

function answer(n,arr){
    if(n == -1){
        return 0;
    }
    
    return Math.max(answer(n-1,arr),arr[n]);
}

console.log(answer(n-1,arr));