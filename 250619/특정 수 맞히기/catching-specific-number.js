const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split('\n');

let idx = 0;
while(true){
    if(inputs[idx] < 25){
        console.log('Higher');
    }else if(inputs[idx] > 25){
        console.log("Lower");
    }else{
        console.log('Good');
        break;
    }
    idx++;
}