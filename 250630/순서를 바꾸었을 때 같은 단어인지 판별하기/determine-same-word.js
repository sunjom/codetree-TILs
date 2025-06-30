const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

// Please Write your code here.

const arr1 = [...str1];
const arr2 = [...str2];
arr1.sort();
arr2.sort();

if(arr1.join('') == arr2.join('')){
    console.log('Yes');
}else{
    console.log('No');
}