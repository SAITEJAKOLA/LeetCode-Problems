function linearSearch(arr, target) {
	if (arr.length === 0) return -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) return i;
	}
	return -1;
}
console.log(linearSearch([10, 20, 30, 40], 30)); // 2
console.log(linearSearch([10, 20, 30, 40], 50)); // -1

function findMaximum(arr) {
	if (arr.length === 0) return undefined;
	let max = -Infinity;
	for (let val of arr) {
		if (val > max) max = val;
	}
	return max;
}
console.log(findMaximum([4, 9, 2, 7])); // 9
console.log(findMaximum([-4, -9, -2, -7])); //-2

// All the logic was correct but missed to increment the start pointer first before replacing the element.
function removeDuplicates(arr) {
	/*
    1. What am I scanning? - Ordered Array
    2. What information must I remember? - if the current element and prev is same or not
    3. Which pointers or boundaries must move? - Need 2 pointers move from the left to right
    4. What makes the current state valid or invalid? - if both the elements are same then it is time to replace the element
    5. What exactly should I return? - retrun the array without any duplicates
    */
	if (arr.length === 0) return;
	let start = 0;
	for (let end = 1; end < arr.length; end++) {
		if (arr[start] !== arr[end]) {
			start++;
			arr[start] = arr[end];
		}
	}
	return arr.slice(0, start + 1);
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4]));

// Did not identify we can use swap instead of replacing the element. So, we can use swap to keep even numbers at the start of the array and odd numbers at the end of the array.
function keepEven(arr) {
	if (arr.length === 0) return [];
	let start = 0;
	for (let end = 0; end < arr.length; end++) {
		if (arr[end] % 2 === 0) {
			[arr[start], arr[end]] = [arr[end], arr[start]];
			start++;
		}
	}
	return arr;
}
console.log(keepEven([1, 2, 3, 4, 6, 7]));

function removeElement(arr, n) {
	if (arr.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[j] !== n) {
			arr[i] = arr[j];
			i++;
		}
	}
	return i;
}
console.log(removeElement([3, 2, 2, 3], 3));

function moveZeros(arr) {
	if (arr.length === 0) return [];
	let writer = 0;
	for (let read = 0; read < arr.length; read++) {
		if (arr[read] !== 0) {
			[arr[read], arr[writer]] = [arr[writer], arr[read]];
			writer++;
		}
	}
	return arr;
}
console.log(moveZeros([0, 1, 0, 3, 0, 2, 3, 0]));

function maxProfit(prices) {
	if (prices.length === 0) return 0;
	let maxProfit = 0;
	let minPrice = prices[0];
	for (let current = 1; current < prices.length; current++) {
		if (prices[current] < minPrice) {
			minPrice = Math.min(minPrice, prices[current]);
		} else {
			maxProfit = Math.max(maxProfit, prices[current] - minPrice);
		}
	}
	return maxProfit ? parseInt(maxProfit) : 0;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1])); //
console.log(maxProfit([1, 2]));
console.log(maxProfit([2, 1]));
console.log(maxProfit([5]));
console.log(maxProfit([2, 4, 1, 8]));

function countTarget(arr, target) {
	if (arr.length === 0) return 0;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) count++;
	}
	return count;
}
console.log(countTarget([2, 5, 2, 7, 2], 2));

function secondLargest(arr) {
	// Do not sort;
	if (arr.length === 0) return 0;
	let largest = -Infinity;
	let secondLargest = -Infinity;
	for (let val of arr) {
		if (val > largest) {
			secondLargest = largest;
			largest = val;
		} else if (val < largest && val > secondLargest) {
			secondLargest = val;
		}
	}
	return secondLargest === -Infinity ? -1 : secondLargest;
}
console.log(secondLargest([10, 5, 8, 10, 3]));
console.log(secondLargest([5, 5, 5]));

function isPalindrome(str) {
	if (str.length === 0) false;
	let i = 0;
	let j = str.length - 1;
	while (i < j) {
		// again think of negative condition, what is the condition that worth invalidating the loop.
		if (str[i] !== str[j]) return false;
		(i++, j--);
	}
	return true;
}
console.log(isPalindrome('abccba'));
