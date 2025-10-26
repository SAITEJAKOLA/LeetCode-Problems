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

//navie solution for maxSubArraySum
//Accepts an arrat of integers and a number n
//Requirement -  The function should calculate max sum of n consecutive elements in the array

//timecomplexity is of O(n^2)
function maxSubArraySum1(arr: number[], n: number): number {
	if (arr.length === 0) return 0;
	let max = 0;
	for (let i = 0; i <= arr.length - n + 1; i++) {
		let temp = 0;
		for (let j = 0; j < n; j++) temp += arr[i + j];
		if (temp > max) max = temp;
	}
	return max;
}
console.log(maxSubArraySum1([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum1([1, 2, 5, 2, 8, 1, 5], 4));

//Using sliding window method with time complexity of O(n)
function maxSubArraySumusingSlidingWindow(arr: number[], n: number): number {
	if (arr.length === 0) return 0;
	let max = 0;
	let tempMax = 0;
	for (let i = 0; i < n; i++) max += arr[i];
	for (let i = 0; i < arr.length - n; i++) {
		// console.log(`Max: ${max} \n arr[i]: ${arr[i]} \n arr[i+n]: ${arr[i + n]}`);
		tempMax = max - arr[i] + arr[i + n];
		// console.log(`tempMax: ${tempMax}`);
		max = Math.max(max, tempMax);
	}
	//alternative solution is we can start at n and so the same stuff but go till end of the array
	// for (let i = n; i < arr.length; i++) {
	//     tempMax = max - arr[i - n] + arr[i]
	//     max = Math.max(max, tempMax)
	// }
	return max;
}
console.log(maxSubArraySumusingSlidingWindow([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySumusingSlidingWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/

function maxSubarraySum1(arr: number[], n: number): number | null {
	if (arr.length < n) return null;

	let maxSum = 0;
	let tempSum = 0;

	for (let i = 0; i < n; i++) {
		tempSum += arr[i];
	}
	maxSum = tempSum;

	for (let i = n; i < arr.length; i++) {
		tempSum = tempSum - arr[i - n] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
}
console.log('-------------maxSubarraySum');
console.log(maxSubarraySum1([100, 200, 300, 400], 2));
console.log(maxSubarraySum1([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum1([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum1([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum1([2, 3], 3));

/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
*/
function minSubArrayLen(arr: number[], n: number): number {
	if (arr.length === 0) return 0;
	let minLength = Infinity;
	let sum = 0;
	let start = 0;
	//start both the pointers from a single point( start=0 and end =0)
	for (let end = 0; end < arr.length; end++) {
		//start sum with the arr[end]
		sum += arr[end];
		// [2(s)(e),3,1,2,4,3]
		// what we do here is if sum> n then start removing the value from starting arr[start] and see if sum is still > n.
		while (sum >= n) {
			minLength = Math.min(minLength, end - start + 1);
			sum -= arr[start];
			start++;
		}
	}
	return (minLength = minLength === Infinity ? 0 : minLength);
}

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

function findLongestSubstring(str: string): number {
	if (str.length === 0) return 0;
	let fc: { [key: string]: number } = {};
	let start = 0;
	let maxLength = 0;
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (fc[char] !== undefined && fc[char] >= start) {
			start = fc[char] + 1;
		}
		fc[char] = i;
		maxLength = Math.max(maxLength, i - start + 1);
	}
	return maxLength;
}
console.log('--------------findLongestSubstring');
console.log(findLongestSubstring('rithmschool')); //7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6);
