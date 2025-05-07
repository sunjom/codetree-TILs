const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

n = Number(n);
b = Number(b);
const answer = []
let x = n

while (true) {
  if (n < b) {
    console.log(n)
    break
  }
  if (x === 1) {
    answer.push(1)
    break
  }
  
  answer.push(x % b)
  x = Math.floor(x / b)
}

console.log(answer.reverse().join(''))