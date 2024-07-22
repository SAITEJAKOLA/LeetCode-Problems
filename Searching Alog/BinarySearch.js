/*
Bineary Search takes an sorted array.
Divide and conqure

BIG O
worst/avg case - O(log n)
Best case - O(1)
*/

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
