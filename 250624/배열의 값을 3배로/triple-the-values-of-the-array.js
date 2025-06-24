const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split('\n');

const arr = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

for(let i = 0 ; i < inputs.length ; i++){
    arr[i] = inputs[i].split(" ").map(Number);
}

for(let i = 0 ; i < inputs.length ; i++){
    for(let e = 0 ; e <inputs[i].length ; e++){
        arr[i][e] *= 3;
    }
}

for(let i = 0 ; i < 3 ; i++){
    let str = "";
    for(let j = 0 ; j < 3 ; j++){
        str+= arr[i][j] + " ";
    }
    console.log(str);
}