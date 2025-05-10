const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let answer = 0
const OFFSET = 100

const board = Array.from({ length: 201 + OFFSET }, () => Array(201 + OFFSET).fill(0));

function fillArray(x1, y1, x2, y2) {
  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      board[y][x] = 1
    }
  }
}

for (let i = 0; i < n; i++) {
  const [x1, y1, x2, y2] = rects[i]
  fillArray(x1 + OFFSET, y1 + OFFSET, x2 + OFFSET, y2 + OFFSET)
}

board.forEach(sub => {
  sub.forEach(item => {
    if (item > 0) {
      answer += 1
    }
  })
})

console.log(answer)