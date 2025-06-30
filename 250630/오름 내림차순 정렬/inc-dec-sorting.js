const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

// Please Write your code here.

function desc(prev,next){
    return next-prev;
}

function asc(prev,next){
    return prev-next;
}

nums.sort(asc);
console.log(nums.join(' '));
nums.sort(desc);
console.log(nums.join(' '));