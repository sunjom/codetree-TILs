const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);
// Please Write your code here.
const xList = [1,0,-1,0];
const yList = [0,1,0,-1];
const dir = {
    'W':2,
    'S':1,
    'N':3,
    'E':0
}

let x = 0;
let y = 0;

let checkTime = 0;
let check = false;
for(let i = 0 ; i < n ; i++){
    const move = moves[i].split(' ');
    const time = Number(move[1])

    for(let e = 0 ; e < time ; e++){
        x += xList[dir[move[0]]];
        y += yList[dir[move[0]]];
        checkTime++;
        if(x == 0 && y == 0){
            check = true;
            break;
        }
    }

    if(check){
        console.log(checkTime);
        break;
    }
}

if(!check){
    console.log(-1);
}

