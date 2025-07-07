const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.

const moveList = moves.map((move) => {
    const [dir, num] = move.split(" ");
    return [dir,Number(num)];
})

let x = 0;
let y = 0;
for(let i of moveList){
    if(i[0] == 'E'){
        x += i[1];
    }else if(i[0] == 'W'){
        x -= i[1];
    }else if(i[0] == 'S'){
        y -= i[1];
    }else{
        y += i[1];
    }
}
console.log(x,y);