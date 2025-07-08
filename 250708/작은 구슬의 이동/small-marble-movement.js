const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

// Please Write your code here.
// N => 행렬, T => 시간,  r,c, => 초기 위치, D => 이동방향

const xList = [0,1,0,-1];
const yList = [1,0,-1,0];
const dir = {
    'U':3,
    'D':1,
    'R':0,
    'L':2,
}
let idx = dir[d];
let time = 0;
while(true){
    if(time >= t) break;
    r += xList[idx]; c += yList[idx];
    if((d =='L' || d == 'R') && (c == 1 || c == n)){
        time +=1;
        idx = idx >= 2 ? 2 - idx : 2 + idx;
    }else if((d =='U' || d == 'D') && (r == 1 || r == n)){
        time +=1;
        idx = idx >= 2 ? 2 - idx : 2 + idx;
    }
    time += 1;
}

console.log(r,c);