const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}
// Please Write your code here.

let idx = 1;
words.sort();
const start = words.findIndex(word => word.includes(t))
for(let i = start ; i < n ; i++){
    if(idx == k){
        console.log(words[idx]);
        break;
    }
    idx++;
}

