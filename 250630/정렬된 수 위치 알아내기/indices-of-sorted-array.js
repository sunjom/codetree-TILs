const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

class answer{
    constructor(num,idx){
        this.num = num;
        this.idx = idx;
    }
}

const arr1 = arr;
const arr2 = []
console.log(arr1);
for(let i = 0 ; i < n ; i++){
    arr2.push(new answer(arr[i],i+1));
}

