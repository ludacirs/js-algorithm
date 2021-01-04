const arr = [4,7,9,10,8,3,1,2,5,6];

function quickSort(arr, left, right) {
    if(left >= right) return ;

    const mid = Math.floor((left+right)/2);
    const pivot = arr[mid];
    const partition = sort(arr, left, right,pivot);


    quickSort(arr, left, partition - 1);
    quickSort(arr, partition, right);

    function sort(arr, left, right,pivot){
        while (left <= right) {
            while (arr[left] < pivot) {
                left++;
            }
            while (arr[right] > pivot) {
                right--;
            }
            if (left <= right) {
                let swap = arr[left];
                arr[left] = arr[right];
                arr[right] = swap;
                left++;
                right--;
            }
        }
        return left;
    }
    return arr;
}

console.log(quickSort(arr, left = 0, right = arr.length-1));

// function quickSort (array, left, right) {
//     if (left >= right) {
//         return;
//     }
//     const mid = Math.floor((left + right) / 2);
//     const pivot = array[mid];
//     const partition = divide(array, left, right, pivot);
//
//     quickSort(array, left, partition - 1);
//     quickSort(array, partition, right);
//
//     function divide (array, left, right, pivot) {
//         while (left <= right) {
//             while (array[left] < pivot) {
//                 left++;
//             }
//             while (array[right] > pivot) {
//                 right--;
//             }
//             if (left <= right) {
//                 let swap = array[left];
//                 array[left] = array[right];
//                 array[right] = swap;
//                 left++;
//                 right--;
//             }
//         }
//         return left;
//     }
//     return array;
//
// }
//
// quickSort(array, 0,right=array.length-1);
//
// console.log(array);