//문자를 입력받는 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(' ')

//간단히만듬
const input = require("fs").readFileSync("/dev/stdin").toString().trim()

const N = Number(require("fs").readFileSync('/dev/stdin').toString().trim());

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = ''
rl.on('line', function(line) {
    input += line+'\n';
}).on('close',function (){
    solution(input.slice(0,-1))
    process.exit();
});

function solution(input){

}