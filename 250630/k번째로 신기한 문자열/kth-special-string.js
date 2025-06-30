const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}
// Please Write your code here.

words.sort();
let count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(t)) { // ✅ 't'로 시작하는 단어
        count++;
        if (count === Number(k)) {
            console.log(words[i]);
            break;
        }
    }
}
