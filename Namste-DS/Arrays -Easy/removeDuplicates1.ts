function removeDuplicatesUsingFc(nums: number[]): number {
	if (nums.length === 0) return 0;
	let fc: { [key: number]: number } = {};
	for (let val of nums) {
		fc[val] = (fc[val] | 0) + 1;
	}
	console.log(fc);
	return Object.keys(fc).length;
}

console.log(removeDuplicatesUsingFc([1, 1, 2, 3, 3, 4, 4, 4, 5]));

function removeDuplicatedUsingSet(nums: number[]): number {
	if (nums.length === 0) return 0;
	let set = new Set(nums);
	nums = [...set];
	console.log(nums);
	return set.size;
}
console.log(removeDuplicatedUsingSet([1, 1, 2, 3, 3, 4, 4, 4, 5]));

function removeDuplicatsUsingtwopinter(nums: number[]): number {
	if (nums.length === 0) return 0;
	let i = 0;
	let j = i + 1;
	while (i < j) {
		if (nums[i] === nums[j]) j++;
		else if (nums[i] !== nums[j]) {
			i++;
			nums[i] = nums[j];
			j++;
		}
	}
	return i + 1;
}

function removeDuplicatesusing2pointers(nums: number[]): number {
	if (nums.length === 0) return 0;
	let x = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[x] > nums[i]) {
			x++;
			nums[x] = nums[i];
		}
	}
	return x + 1;
}
