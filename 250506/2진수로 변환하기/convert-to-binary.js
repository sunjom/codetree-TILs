const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const answer = []
let cur = n

if (n === 0) {
    console.log(n)
    return
}

while (cur !== 1) {
  answer.push(cur % 2)
  cur = Math.floor(cur / 2)
}

answer.push(1)

console.log(answer.reverse().join(''))