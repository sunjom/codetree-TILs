const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k, p, t] = input[0].split(' ').map(Number);
const shakes = [];
for (let i = 1; i <= t; i++) {
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push({ time, person1, person2 });
}
// Please write your code here.
//n => 개발자 수
//k => 감염된 사람이 감염시킬 수 있는 만남의 수
//p => 최조 감염자
//t => 시행 횟수

const Person = Array.from({ length: n + 1 }, () => ({ inf: 0, meet: 0 }));
Person[p] = {inf:1,meet:0};
shakes.sort((prev,cur) => prev.time - cur.time);
for(let meets of shakes){
    const {person1,person2} = meets; 
    
    if((Person[person1].inf == 1 && Person[person1].meet < k)){
        Person[person2].inf = 1;
    }else if((Person[person2].inf == 1 && Person[person2].meet < k)){
        Person[person1].inf = 1;
    }
    Person[person1].meet++;
    Person[person2].meet++;
}

let str = '';
for(let i = 1 ; i < Person.length; i++){
    str += Person[i].inf+'';
}

console.log(str);