function reverse(arr) {
	if (arr.length === 0) return [];
	let start = 0;
	let end = arr.length - 1;
	while (start < end) {
		[arr[start], arr[end]] = [arr[end], arr[start]];
		start++;
		end--;
	}
	return arr;
}
console.log(reverse([1, 2, 3, 4, 5]));

function reverseString(arr) {
	if (arr.length === 0) return [];
	let s = arr.split('');
	let start = 0;
	let end = arr.length - 1;
	while (start < end) {
		[s[start], s[end]] = [s[end], s[start]];
		start++;
		end--;
	}
	return s.join('');
}
console.log(reverseString('abc'));

function moveNegative(arr) {
	if (arr.length === 0) return [];
	let i = 0;
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] < 0) {
			console.log('Entered with', arr[j]);
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
		}
	}
	return arr;
}
console.log(moveNegative([5, 3, 4, -1, 2]));
console.log(moveNegative([-2, 3, 6, -1, 2]));

function moveZeroToEnd(arr) {
	if (arr.length === 0) return [];
	let i = 0;
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] !== 0) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
		}
	}
	return arr;
}
console.log(moveZeroToEnd([0, 2, 3, 0, 4, 5, 6]));

function moveZeroToEnd(arr) {
	if (arr.length === 0) return [];
	let i = 0;
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] >= 0) {
			arr[i] = arr[j];
			i++;
		}
	}
	return arr;
}
console.log(moveZeroToEnd([-1, 2, 3, 0, 4, 5, 6]));

function removeDuplicates(arr) {
	if (arr.length === 0) return [];
	let i = 0;
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] !== arr[i]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return arr;
}
console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 5, 6]));

function isPalindrome(arr) {
	if (arr.length === 0) return true;
	let i = 0;
	let j = arr.length - 1;
	while (i < j) {
		if (arr[i] !== arr[j]) return false;
		i++;
		j--;
	}
	return true;
}
console.log(isPalindrome([1, 2, 3, 4, 4, 3, 2, 1]));

function twoSum(arr, n) {
	if (arr.length === 0) return [];
	let i = 0;
	let j = arr.length - 1;
	while (i < j) {
		let sum = arr[i] + arr[j];
		if (sum > n) j--;
		else if (sum < n) i++;
		else return [arr[i], arr[j]];
	}
	return [];
}
console.log(twoSum([2, 7, 11, 15], 9));

function twoSum(arr, n) {
	if (arr.length === 0) return [];
	let map = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (map.has(n - arr[i])) return [n - arr[i], arr[i]];
		map.set(arr[i], i);
	}
	return [];
}
console.log(twoSum([2, 7, 11, 15], 9));

// Container With Most Water (LeetCode 11)
function maxArea(arr) {
	if (arr.length === 0) return 0;
	let i = 0;
	let j = arr.length - 1;
	let maxArea = arr[i] <= arr[j] ? arr[i] * (j - i) : arr[j] * (j - i);
	while (i < j) {
		if (arr[i] <= arr[j]) i++;
		else j--;
		let area = arr[i] <= arr[j] ? arr[i] * (j - i) : arr[j] * (j - i);
		maxArea = Math.max(maxArea, area);
	}
	return maxArea;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
