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

/*
Divide and Conquer - sortedFrequency
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

sortedFrequency([1,1,2,2,2,2,3],2) // 4 
sortedFrequency([1,1,2,2,2,2,3],3) // 1 
sortedFrequency([1,1,2,2,2,2,3],1) // 2 
sortedFrequency([1,1,2,2,2,2,3],4) // -1
Time Complexity - O(log n)
*/
function sortedFrequency(arr: number[], n: number): number {
    if (arr.length === 0) return -1;
    //Write 2 helper functions using binary search to find the left most index of the number and right most index of the number
    function findFirst(arr: number[], n: number) {
        let result = -1;
        let left = 0
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === n) {
                result = mid;
                right = mid - 1
            } else if (arr[mid] < n) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
    function findLast(arr: number[], n: number): number {
        let result = -1;
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === n) {
                result = mid;
                left = mid + 1;
            } else if (arr[mid] < n) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    const firstIndex = findFirst(arr, n);
    if (firstIndex == -1) return -1;
    const lastIndex = findLast(arr, n);
    return lastIndex - firstIndex + 1;
}

console.log('------------------sortedFrequency');
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) // 4 
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1 
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2 
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1

/*
Divide and Conquer - findRotatedIndex
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.

Constraints:

Time Complexity - O(log n)

Space Complexity - O(1)

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5
*/
function findRotatedIndex(arr: number[], n: number): number {
    if (arr.length === 0) return -1;
    arr.sort((a, b) => b - a); // O(log n)
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === n) {
            result = mid;
        } else if (arr[mid] < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}
console.log('---------------findRotatedIndex');
console.log(findRotatedIndex([3, 4, 1, 2], 4))// 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)) // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)) // 5