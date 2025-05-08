/*
Divide and Conquer 
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity
*/

//Binary search

function binarySearch(arr, num) {
  if (arr.length === 0) return -1;
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[middle] > num) {
      end = middle - 1;
    } else if (arr[middle] < num) {
      start = middle + 1;
    } else {
      return middle;
    }
    middle = Math.floor((start + end) / 2);
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 5));
