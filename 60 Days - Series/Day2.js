// In place , order can be changed, non decesnding order
function removeElements(arr, n) {
	if (arr.length === 0) return 0;
	let i = 0;
	for (let j = 0; j < arr.length; j++) {
		//what is the condition that makes the value to worth keeping it.
		if (arr[j] !== n) {
			arr[i] = arr[j];
			i++;
		}
	}
	return arr;
}
console.log(removeElements([3, 2, 2, 3], 3));
console.log(removeElements([0, 1, 2, 2, 3, 0, 4, 2], 2));

function removeDuplicates(arr) {
	if (arr.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[j] !== arr[i]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));

function moveZeroes(arr) {
	if (arr.length === 0) return [];
	let i = 0;
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] !== 0) {
			[arr[j], arr[i]] = [arr[i], arr[j]];
			i++;
		}
	}
	return arr;
}
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));

function keepEven(arr) {
	if (arr.length === 0) return [];
	let i = 0;
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] % 2 === 0) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
		}
	}
	return arr;
}
console.log(keepEven([1, 2, 3, 4, 5, 6, 7]));

function merge(nums1, m, nums2, n) {
	if (nums1.length === 0 && nums2.length === 0) return [];

	let i = m - 1;
	let j = n - 1;
	let k = m + n - 1;
	while (i > 0 && j > 0) {
		if (nums1[i] >= nums2[j]) {
			nums1[k] = nums1[i];
			k--;
			i--;
		} else {
			nums1[k] = nums2[j];
			k--;
			j--;
		}
	}
	while (i > 0 && k > 0) {
		nums1[k] = nums1[i];
		k--;
		i--;
	}
	while (j > 0 && k > 0) {
		nums1[k] = nums2[j];
		k--;
		j--;
	}
	return nums1;
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

function maxProfit(prices) {
	if (prices.length === 0) return 0;
	let maxProfit = 0;
	let leastPrice = prices[0];
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] < leastPrice) {
			leastPrice = Math.min(leastPrice, prices[i]);
		} else {
			maxProfit = Math.max(maxProfit, prices[i] - leastPrice);
		}
	}
	return maxProfit ? parseInt(maxProfit) : 0;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Strings are immutable -

function reverse(str) {
	if (str.length === 0) return '';
	let arr = str.split('');
	let i = 0;
	let j = arr.length - 1;
	while (i < j) {
		[arr[j], arr[i]] = [arr[i], arr[j]];
		i++;
		j--;
	}
	return arr.join('');
}
console.log(reverse('abc'));

function isPalindrome(str) {
	if (str.length === 0) return false;
	// I have to always take the modified string into a new string.
	let cleanstr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
	let i = 0;
	let j = cleanstr.length - 1;
	while (i < j) {
		if (cleanstr[i] !== cleanstr[j]) return false;
		i++;
		j--;
	}
	return true;
}
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
console.log(isPalindrome(''));

/*
Valid Palindrome II (LeetCode 680)
Given a string s, 
return true if the s can be a palindrome after deleting 
at most one character from it.
*/
function validPalindrome(str) {
	if (str.length === 0) return false;
	let cleanstr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
	function isPalindrome(s) {
		if (s.length === 0) return false;
		let i = 0;
		let j = s.length - 1;
		while (i < j) {
			if (s[i] !== s[j]) return false;
			i++;
			j--;
		}
		return true;
	}
	let i = 0;
	let j = cleanstr.length - 1;
	while (i < j) {
		if (cleanstr[i] !== cleanstr[j]) {
			if (
				isPalindrome(cleanstr.slice(i + 1, j + 1)) ||
				isPalindrome(cleanstr.slice(i, j))
			)
				return true;
		}
		i++;
		j--;
	}
	return true;
}
console.log(validPalindrome('abca'));
