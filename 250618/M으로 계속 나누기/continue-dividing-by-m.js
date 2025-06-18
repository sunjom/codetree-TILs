const fs = require("fs");
let a = fs.readFileSync(0).toString();
let arr = a.split(" ");

let n = Number(arr[0]);
let m = Number(arr[1]);

// Please write your code here.

while(n > m){
    console.log(n);
    n = Math.floor(n/m);
}

console.log(n);