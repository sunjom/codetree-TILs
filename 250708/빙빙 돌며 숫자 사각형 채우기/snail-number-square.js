const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.
const answer = [];

for(let i = 0 ; i < n ; i++){
    answer[i] = [];
    for(let e = 0 ; e < m ; e++){
        answer[i][e] = 0;
    }
}


const xList = [0,1,0,-1];
const yList = [1,0,-1,0];

let x = 0;
let y = 0;
let dirNum = 0;

function inRange(x,y){
    return (x >= 0 && x < n) && (y >= 0 && y <m)
}

answer[0][0] = 1;

for(let i = 2 ; i <= n*m ; i++){
    let nx = x + xList[dirNum] ; let ny = y + yList[dirNum];
    if(!inRange(nx,ny) || answer[nx][ny] !== 0){
        dirNum = (dirNum +1) % 4;
    }

    x += xList[dirNum];
    y += yList[dirNum];

    answer[x][y] = i;
}

for(let i = 0 ; i < n ; i++){
    let str = '';
    for(let e = 0 ; e < m ; e++){
        str += answer[i][e] + ' ';
    }
    console.log(str);
}