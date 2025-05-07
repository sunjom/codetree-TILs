const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];
let answer = 0

function toDecimal(str) {
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    sum = sum * 2 + Number(str[i])
  }
  return sum
}

function toBinary(num) {
  const answer = []
  let x = num
  while(true) {
    if (x < 2) {
      answer.push(x)
      break
    }
    answer.push(x % 2)
    x = Math.floor(x / 2)
  }
  return answer.reverse().join('')
}

answer = toDecimal(binaryInput)
answer = answer * 17
answer = toBinary(answer)

console.log(answer)