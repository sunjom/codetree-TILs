const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

// Please Write your code here.

const Student = Array(n+1).fill(0);

let check = -1;
for(let i of penalizedPersons){
    Student[i]++;
    if(Student.includes(k)){
        check = i;
        break;
    }
}
if(check > -1){
    console.log(check);
}else{
    console.log(-1);
}