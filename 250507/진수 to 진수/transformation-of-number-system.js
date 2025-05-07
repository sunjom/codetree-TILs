const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1].toString();

let sum = 0
const answer = []

for (let i = 0; i < n.length; i++) {
  sum = sum * 8 + Number(n[i])
}

let x = sum

while(true) {
  if (x < b) {
    answer.push(x)
    break
  }
  answer.push(x % b)
  x = Math.floor(x / b)
}

console.log(answer.reverse().join(''))