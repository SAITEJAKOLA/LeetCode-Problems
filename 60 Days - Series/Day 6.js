function maxSubarray(arr, k) {
	if (arr.length === 0 || k <= 0 || k > arr.length) return 0;

	let tempSum = 0;
	for (let i = 0; i < k; i++) {
		tempSum += arr[i];
	}
	let sum = tempSum;
	for (let i = k; i < arr.length; i++) {
		tempSum = tempSum - arr[i - k] + arr[i];
		sum = Math.max(tempSum, sum);
	}
	return sum;
}
console.log(maxSubarray([4, 2, 7, 1, 5], 3));

// Sliding Window Primitive 2 — Track Something Other Than Sum

function maxVowelCount(str, k) {
	if (str.length === 0 || k <= 0 || k > str.length) return 0;
	const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
	let tempCount = 0;
	let isVowel = (ele) => {
		if (vowels.has(ele)) return 1;
		return 0;
	};
	for (let i = 0; i < k; i++) {
		if (isVowel(str[i])) tempCount++;
	}
	let maxCount = tempCount;
	for (let i = k; i < str.length; i++) {
		tempCount = tempCount - isVowel(str[i - k]) + isVowel(str[i]);
		// console.log(tempCount);
		maxCount = Math.max(maxCount, tempCount);
	}
	return maxCount;
}
console.log(maxVowelCount('abciiidef', 3));

function numberofzeroes(arr, k) {
	if (arr.length === 0 || k <= 0 || k > arr.length) return 0;
	let tempCount = 0;
	let isZero = (ele) => {
		return ele === 0 ? 1 : 0;
	};
	for (let i = 0; i < k; i++) {
		tempCount += isZero(arr[i]);
	}

	let maxCount = tempCount;
	for (let i = k; i < arr.length; i++) {
		tempCount = tempCount - isZero(arr[i - k]) + isZero(arr[i]);
		console.log('tempCount', tempCount);
		maxCount = Math.max(maxCount, tempCount);
	}
	return maxCount;
}
console.log(numberofzeroes([1, 0, 0, 0, 2, 0, 0, 0], 3));

function maxDistinctCharacters(str, k) {
	if (str.length === 0 || k <= 0 || k > str.length) return 0;
	let map = new Map();
	for (let i = 0; i < k; i++) {
		map.set(str[i], (map.get(str[i]) || 0) + 1);
	}
	let maxDistinct = map.size;

	for (let i = k; i < str.length; i++) {
		let outgoing = str[i - k];
		let incoming = str[i];

		//remove outgoing from the map first
		map.set(outgoing, map.get(outgoing) - 1);
		if (map.get(outgoing) === 0) map.delete(outgoing);

		//add the incoming element to map;
		map.set(incoming, (map.get(incoming) || 0) + 1);

		maxDistinct = Math.max(maxDistinct, map.size);
	}
	return maxDistinct;
}

console.log(maxDistinctCharacters('abac', 3));

function lengthOfLongestSubstring(s) {
	if (s.length === 0) return 0;
	let max = 0;
	let i = 0;
	let set = new Set();
	for (let j = 0; j < s.length; j++) {
		while (set.has(s[j])) {
			set.delete(s[i]);
			i++;
		}
		set.add(s[j]);
		max = Math.max(max, j - i + 1);
	}
	return max;
}
console.log(lengthOfLongestSubstring('abcabcbb'));

function lengthOfLongestSubstringKDistinct(s, k) {
	if (s.length === 0 || k <= 0 || k > s.length) return 0;
	let max = 0;
	let map = new Map();
	let i = 0;
	for (let j = 0; j < s.length; j++) {
		map.set(s[j], (map.get(s[j]) || 0) + 1);
		while (map.size > k) {
			map.set(s[i], map.get(s[i]) - 1);
			if (map.get(s[i]) === 0) {
				map.delete(s[i]);
			}
			i++;
		}
		max = Math.max(max, j - i + 1);
	}
	return max;
}
console.log(lengthOfLongestSubstringKDistinct('eceb', 2));

function longestOnes(arr, k) {
	if (arr.length === 0 || k < 0) return 0;
	let zeroCount = 0;
	let max = 0;
	let i = 0;
	let map = new Map();
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] === 0) zeroCount++;
		while (zeroCount > k) {
			//shrink
			if (arr[i] === 0) zeroCount--;
			i++;
		}
		max = Math.max(max, j - i + 1);
	}
	return max;
}
console.log(
	longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3),
);
