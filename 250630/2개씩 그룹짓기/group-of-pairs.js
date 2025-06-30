const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.

function answer(n,m,arr){
    if(n+1 == m){
        return arr[n] + arr[n+1];
    }
    return Math.max(answer(n+1,m-1,arr),arr[n]+arr[m]);
}

nums.sort((a,b) => a-b);

ans = answer(0,n*2-1,nums);
console.log(ans);