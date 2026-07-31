function removeDuplicates(arr) {
	if (arr.length === 0) return [];
	let set = new Set(arr);
	return [...set];
}
console.log(removeDuplicates([1, 1, 1, 2, 3, 4, 2, 4, 5, 6]));

function containsDuplicate(arr) {
	if (arr.length === 0) return false;
	let set = new Set();
	for (let val of arr) {
		if (set.has(val)) return true;
		set.add(val);
	}
	return false;
}
console.log(containsDuplicate([1, 1, 1, 2, 3, 4, 2, 4, 5, 6]));

function countDistinct(arr) {
	if (arr.length === 0) return false;
	let set = new Set();
	let count = 0;
	for (let val of arr) {
		if (!set.has(val)) {
			// console.log("Entered", count);
			set.add(val);
			count++;
		}
	}
	return count;
}
console.log(countDistinct([1, 1, 1, 2, 3, 4, 2, 4, 5, 6]));

function firstRepeated(arr) {
	if (arr.length === 0) return [];
	let set = new Set();
	for (let val of arr) {
		if (set.has(val)) return [val];
		set.add(val);
	}
	return [];
}
console.log(firstRepeated([1, 2, 3, 4, 5, 5]));

// This is not using set
function findMissing(arr) {
	let result = [];
	if (arr.length === 0 || arr.length === arr[arr.length - 1]) return result;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] !== arr[i] + 1) result.push(arr[i] + 1);
	}
	return result;
}
console.log(findMissing([1, 2, 3, 5, 6, 9]));

function printUnique(arr) {
	if (arr.length === 0) return [];
	let set = new Set(arr);
	return [...set];
}
console.log(printUnique(['apple', 'banana', 'apple', 'orange', 'banana']));

// Result can be in any order and result must be unique numbers only
function intersection(nums1, nums2) {
	if (nums1.length === 0 && nums2.length === 0) return [];
	let set = new Set(nums1);
	let result = new Set();
	for (let val of nums2) {
		if (set.has(val) && !result.has(val)) result.add(val);
	}
	return [...result];
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

function happyNumber(n) {
	if (n === 0) return 0;
	let set = new Set();
	while (n != 1) {
		if (set.has(n)) return false;
		set.add(n);
		n = getNextNumber(n);
	}
	return true;
}

function getNextNumber(n) {
	if (n === 0) return 0;
	let sum = 0;
	while (n > 0) {
		digit = n % 10;
		sum += digit * digit;
		console.log('sum', sum);
		n = Math.floor(n / 10);
	}
	return sum;
}

console.log(happyNumber(19));

function longestConscutive(nums) {
	if (nums.length === 0) return 0;
	let set = new Set(nums);
	let longest = 0;
	for (let val of nums) {
		if (!set.has(val - 1)) {
			let curval = val;
			let curlength = 1;
			while (set.has(curval + 1)) {
				curval++;
				curlength++;
			}
			longest = Math.max(longest, curlength);
		}
	}
	return longest;
}
console.log(longestConscutive([100, 4, 200, 1, 2, 3]));
