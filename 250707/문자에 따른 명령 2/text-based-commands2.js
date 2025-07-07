const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

// Please Write your code here.

let idx = 0
const xList = [0,1,0,-1];
const yList = [1,0,-1,0];

let x = 0;
let y = 0;

for(let i of commands){
    if(idx == 0 && i =='L' ){
        idx = 3;
    }else if(idx == 3 && i == 'R'){
        idx = 0;
    }
    else if(i == 'L'){
        idx -= 1;
    }else if(i =='R'){
        idx += 1;
    }else{
        x += xList[idx];
        y += yList[idx];
    }
}

console.log(x,y);