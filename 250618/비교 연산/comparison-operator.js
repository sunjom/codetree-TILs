const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split(' ');

const a = Number(inputs[0]);
const b = Number(inputs[1]);

if(a >= b){
    console.log('1');
}else{
    console.log('0');
};

if(a > b){
        console.log('1');
}else{
    console.log('0');
};

if(b >= a){
        console.log('1');
}else{
    console.log('0');
};

if(b > a){
        console.log('1');
}else{
    console.log('0');
};

if(a==b){
        console.log('1');
}else{
    console.log('0');
};

if(a != b){
        console.log('1');
}else{
    console.log('0');
};