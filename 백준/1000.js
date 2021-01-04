// const fs = require("fs");
//
// // 문자 하나
// const input = fs.readFileSync("/dev/stdin").toString().split(' ').map(v=>parseInt(v,10));

const input = ['1','2'];
const arr = [];

for(let i=0; i<input.length;i++){
    arr.push(parseInt(input[i],10));
}

const [a,b] = input;

console.log(a+b);