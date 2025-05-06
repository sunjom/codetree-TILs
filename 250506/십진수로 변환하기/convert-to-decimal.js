const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

const strArr = binaryStr.split('')
let answer = 0

for (let i = 0; i < strArr.length; i++) {
  let n = 1
  for (let j = strArr.length - 1 - i; j > 0; j--) {
    n = n * 2
  }
  answer += strArr[i] * n
}

console.log(answer)