function firstDuplicateCharacter(arr) {
	if (arr.length === 0) return '';
	let map = new Map();
	for (let val of arr) {
		map.set(val, (map.get(val) || 0) + 1);
	}
	// console.log(map);
	for (let key of map) {
		// console.log(key[1]);
		if (key[1] === 2) return key[0];
	}
	return '';
}
console.log(firstDuplicateCharacter('abca'));

let map = new Map();
// Add
map.set('apple', 4);
map.set('banana', 6);
// read
// console.log(map.get("apple"));
// console.log(map.has("pineapple"));
// console.log(map.delete("banana"));
// console.log(map.size);

//sets

let set = new Set();
//Add
set.add(10);
set.add(20);

//check
set.has(20);

//delete
set.delete(10);

//size;
set.size;

/*
Recognising Hashing problems
when a problem says:
count frequency;
Find Duplicates
check if exists
seen Before
Pair Lookup
Unique values
*/

function unique(arr) {
	if (arr.length === 0) return [];
	let map = new Map();
	for (let val of arr) {
		map.set(val, (map.get(val) || 0) + 1);
	}
	return [...map.keys()];
}
// console.log(unique([1,2,2,3,3,4]));

function allUnique(arr) {
	if (arr.length === 0) return [];
	let clean = arr.split('');
	console.log(clean);
	let map = new Map();
	for (let val of clean) {
		if (map.has(val)) return false;
		map.set(val, (map.get(val) || 0) + 1);
	}
	return true;
}
// console.log(allUnique([1,2,2,3,3,4]));
// console.log(allUnique("abca"));

function containsDuplicate(arr) {
	if (arr.length === 0) return [];
	let set = new Set(arr);
	if (arr.length !== set.size) return false;
	return true;
}
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
// console.log(containsDuplicate([1,2,3,4]));

function containDuplicates(arr) {
	if (arr.length === 0) return false;
	let set = new Set();
	for (let val of arr) {
		if (set.has(val)) return true;
		set.add(val);
	}
	return false;
}
console.log(containDuplicates([1, 2, 3, 4, 5, 6]));

function isAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;
	let s = str1.replace(/[^A-Za-z0-9]/g, '').split('');
	let t = str2.replace(/[^A-Za-z0-9]/g, '').split('');
	let map = new Map();
	for (let val of s) {
		map.set(val, (map.get(val) || 0) + 1);
	}
	for (let val of t) {
		if (!map.has(val)) return false;
		let count = map.get(val);
		if (count === 1) map.delete(val);
		else map.set(val, count - 1);
	}
	return true;
}
console.log(isAnagram('anagram', 'nagaram'));

function isAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;
	let map = new Map();
	let sortedString1 = str1.split('').sort().join();
	let sortedString2 = str2.split('').sort().join();
	map.set(sortedString1, (map.get(sortedString1) || 0) + 1);
	if (map.has(sortedString2)) return true;
	else return falsse;
}
console.log(isAnagram('anagram', 'nagaram'));

function groupAnagrams(strs) {
	if (strs.length === 0) return [];
	let map = new Map();
	for (let val of strs) {
		let sortedString = val.split('').sort().join('');
		if (!map.has(sortedString)) {
			map.set(sortedString, []);
		}
		let curr = map.get(sortedString);
		curr.push(val);
		map.set(sortedString, curr);
	}
	return map;
}
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

//Two sum
function twoSum(arr, n) {
	if (arr.length === 0) return [];
	let map = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (map.has(n - arr[i])) {
			return [map.get(n - arr[i]), i];
		}
		map.set(arr[i], i);
	}
	return [];
}
console.log(twoSum([2, 3, 8, 1, 7, 6], 9));

function validAnagram(str1, str2) {
	if (str1.length === 0 && str2.length === 0) return true;
	let map = new Map();
	let cleanstr1 = str1.split('').sort().join('');
	let cleanstr2 = str2.split('').sort().join('');
	map.set(cleanstr1, (map.get(cleanstr1) || 0) + 1);
	if (map.has(cleanstr2)) return true;
	return false;
}
console.log(validAnagram('anagram', 'nagaram'));

function groupValidAnagrams(strs) {
	if (strs.length === 0) return [];
	let map = new Map();
	for (let val of strs) {
		let s = val.split('').sort().join('');
		if (!map.has(s)) {
			map.set(s, []);
		}
		let pushval = map.get(s);
		pushval.push(val);
		map.set(s, pushval);
	}
	return map;
}
console.log(groupValidAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
