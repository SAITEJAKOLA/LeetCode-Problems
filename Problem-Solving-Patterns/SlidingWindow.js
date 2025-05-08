/*
Sliding Window
This pattern involves creating a window which can either be an array or number from one position to another.
Depending on a certain condition, the window either increases or closes(and a new window is create).

Very useful for keeping a track of a subset of data in an aray/string etc.....
*/

/*
maxSubarraySum - which accepts an array of integers and a number called n.
The function should calculate the maxium sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2)//10 
maxSubarraySum([1,2,5,2,8,1,5],4)//17 
*/

//using for loops
// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return false;
//   }

//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num; i++) {
//     let temp = 0;
//     for (j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//     console.log(temp, max);
//   }
//   return max;
// }

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

//using Sliding window.
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) {
    return false;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
