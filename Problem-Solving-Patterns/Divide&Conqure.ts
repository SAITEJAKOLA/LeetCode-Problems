/*
Divide and Conquer 
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity
*/
//Binary search is example of Divide and Conqure mechanism

function binarySearch(arr: number[], n: number): number {
    if (arr.length === 0) return -1;
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (arr[mid] === n) return mid;
        else if (arr[mid] < n) min = mid + 1;
        else max = mid - 1;
    }
    return -1;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 10));