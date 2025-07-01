const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k, p, t] = input[0].split(' ').map(Number);
const shakes = [];

for (let i = 1; i <= t; i++) {
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push({ time, person1, person2 });
}

const Person = Array.from({ length: n + 1 }, () => ({ inf: 0, meet: 0 }));
Person[p].inf = 1;

shakes.sort((a, b) => a.time - b.time);

for (let { person1, person2 } of shakes) {
    const p1 = Person[person1];
    const p2 = Person[person2];

    if (p1.inf === 1 && p1.meet < k) {
        if (p2.inf === 0) p2.inf = 1;
        p1.meet++;
    }

    if (p2.inf === 1 && p2.meet < k) {
        if (p1.inf === 0) p1.inf = 1;
        p2.meet++;
    }
}

let result = '';
for (let i = 1; i <= n; i++) {
    result += Person[i].inf;
}
console.log(result);
