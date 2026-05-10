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

/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

//This only solve the problem if we want to identify the longest substring from the starting, but it wont work if we want to find the longest substring in the middle of the string, we cant.
function findLongestSubstringStart(str) {
	if (str.length === 0) return 0;
	let newSet = new Set();
	for (let i = 0; i < str.length; i++) {
		console.log(newSet);
		if (newSet.has(str[i])) return i;
		newSet.add(str[i]);
	}
}
console.log(findLongestSubstringStart('rithmschool'));

function findLongestSubstring(str) {
	if (str.length === 0) return 0;
	let start = 0;
	let max = 0;
	let newSet = new Set();
	for (let end = 0; end < str.length; end++) {
		while (newSet.has(str[end])) {
			newSet.delete(str[start]);
			start++;
		}
		newSet.add(str[end]);
		max = Math.max(max, end - start + 1);
	}
	return max;
}
