const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const xList = [0,1,0,-1];
const yList = [1,0,-1,0];

function check(x,y){
    if((x >= 0 && x < n) && (y >= 0 && y < n)){
        return true;
    }
    return false;
}

function search(x,y){
    let count = 0;
    for(let i = 0 ; i < 4 ; i++){
        if(check(x+xList[i] , y+yList[i])){
            if(grid[x+xList[i]][y+yList[i]] == 1){
                count +=1;
            }
        }
    }
    if(count >= 3){
        return true;
    }
    return false;
}
let answer = 0;
for(let i = 0 ; i < n ; i++){
    for(let e = 0 ; e < n ; e++){
        if(search(i,e)){
            answer +=1;
        }
    }
}
console.log(answer);