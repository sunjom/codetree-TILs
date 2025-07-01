const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

// Please Write your code here.

const A = [0];
const B = [0];

let AIdx = 0;
let BIdx = 0;
for(let i of movesA){
    let sum = A[AIdx];
    const [move,distance] = i;
    if(move == 'R'){
        for(let e = 0 ; e < distance ; e++){
            A.push(++sum);
            AIdx++;
        }
    }else{
        for(let e = 0 ; e < distance ; e++){
            A.push(--sum);
            AIdx++;
        }
    }
}

for(let i of movesB){
    let sum = B[BIdx];
    const [move,distance] = i;
    if(move == 'R'){
        for(let e = 0 ; e < distance ; e++){
            B.push(++sum);
            BIdx++;
        }
    }else{
        for(let e = 0 ; e < distance ; e++){
            B.push(--sum);
            BIdx++;
        }
    }
}

let check = -1;
for(let i = 1 ; i < A.length ; i++){
    if(A[i] == B[i]){
        check = i;
        break;
    }
}

if(check > 0){
    console.log(check);
}else{
    console.log(-1);
}