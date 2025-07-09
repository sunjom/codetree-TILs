const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
    moves.push(input[i].split(" ").map(Number));
}

// Please Write your code here.

const lst = [];
let answer = [];

for(let i = 0 ; i < n ; i++){
    lst[i] = [];
    answer[i] = [];
    for(let e = 0 ; e < n ; e++){
        lst[i][e] = 0;
        answer[i][e] = 0;
    }
}

let xList = [1,0,-1,0];
let yList = [0,1,0,-1];

function check(x,y){
    return (x >= 0 && x < n) && (y >= 0 && y < n)
}
for(let i = 0 ; i < m ; i++){
    let [x,y] = moves[i];
    x--; y--;
    lst[x][y] = 1;

    let count = 0;
    for(let e = 0 ; e < 4 ; e++){
        const nx = x + xList[e];
        const ny = y + yList[e];
        if(check(nx,ny) && lst[nx][ny] == 1){
            count++;
        }
    }
    if(count == 3){
        console.log(1);
    }else{
        console.log(0);
    }
}