const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r) - 1;
c = Number(c) - 1;

// Please Write your code here.
// N => 행렬, T => 시간,  r,c, => 초기 위치, D => 이동방향
1 , 3 
const xList = [0,1,-1,0];
const yList = [1,0,0,-1];
const dir = {
    'U':3,
    'D':1,
    'R':0,
    'L':2,
}


let idx = dir[d];

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

for(let i = 0 ; i < t ; i++){
    const nr = r + xList[idx];
    const nc = c + yList[idx];

    if(inRange(nr,nc)){
        r = nr;
        c = nc;
    }else{
        idx = 3 - idx;
    }
}


console.log(r + 1,c + 1);