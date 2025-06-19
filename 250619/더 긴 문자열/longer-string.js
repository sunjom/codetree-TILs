const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split(' ');

if(inputs[0].length > inputs[1].length){
    console.log(inputs[0],inputs[0].length);
}else if(inputs[0].length < inputs[1].length){
    console.log(inputs[1],inputs[1].length);
}else{
    console.log('same');
}