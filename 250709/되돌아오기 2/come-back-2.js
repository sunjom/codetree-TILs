const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];
// Please Write your code here.

const xList = [1,0,-1,0];
const yList = [0,1,0,-1];

let x = 0;
let y = 0;
let dir = 3;

let answer = -1;
let time = 0;

for(let i = 0 ; i < commands.length ; i++){
    if(commands[i] == 'F'){
        x += xList[dir]; y += yList[dir];
    }else if(commands[i] == 'L'){
        dir = (3 - dir) % 4;
    }else{
        dir = (dir + 1) % 4;
    }
    time++;
    if(x == 0 && y == 0){
        answer = time;
        break;
    }
}

console.log(answer);