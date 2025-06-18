const fs = require('fs');
let data = fs.readFileSync(0).toString().trim();

console.log(`Your score is ${data} point.`)