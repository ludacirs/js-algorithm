const arr = [4,3,1,2,5,6,7,9,10,8];


function mergeSort(arr) {
    if(arr.length<=1) return arr;

    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    function merge(left, right) {
        const result = [];

        while (left.length&&right.length){
            if(left[0]<=right[0]){
                result.push(left.shift());
            } else result.push(right.shift());
        }

        while(left.length){
            result.push(left.shift());
        }
        while(right.length){
            result.push(right.shift());
        }

        return result;
    }

    return merge(mergeSort(left), mergeSort(right));

}

console.log(mergeSort(arr));


//
// function half(arr) {
//     if(arr.length<=1){
//         return arr;
//     }
//
//     const mid = (arr.length/2);
//
//     const left = arr.slice(0,mid);
//     const right = arr.slice(mid);
//
//     return merge(half(left),half(right));
// }
//
//
// function merge(n, m) {
//     const result = [];
//
//
//     while (n.length&&m.length){
//         if(n[0]<m[0]){
//             result.push(n.shift());
//         } else {
//             result.push(m.shift());
//         }
//     }
//     while(n.length) {
//         result.push(n.shift());
//     }
//     while(m.length){
//         result.push(m.shift());
//     }
//     console.log(result);
//     return result;
// }
//
// console.log(half(arr));
