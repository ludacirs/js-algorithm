const str = '2 1 3 6 4 5';


function solution(str) {
    const arr = str.split(' ').map((v)=>{
       return parseInt(v,10);
    });
    arr.sort((a,b)=>{
        return a-b;
    })
    let isContinue = arr[0];

    for(let v of arr){
        if(v !== isContinue++) return false;
    }
    return true;
}

console.log(solution(str));
