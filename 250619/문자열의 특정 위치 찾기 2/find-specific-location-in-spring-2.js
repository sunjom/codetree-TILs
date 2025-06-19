const fs =require('fs');
const input = fs.readFileSync(0).toString().trim();

const arr = ['apple','banana','grape','blueberry','orange'];

const result = []; 
for(let i of arr){
    const check = i.slice(2,4);
    if(check.indexOf(input) > -1){
        result.push(i);
    }
}

for(let i of result){
    console.log(i);
}

console.log(result.length);