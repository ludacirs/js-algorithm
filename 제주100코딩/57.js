
let str = '';
for(let i=1; i<=1000;i++) {
    str += i;
}
console.log(str.match(/1/g).length);