function sortArray(nums: number[]): number[] {
	for (let i = nums.length; i > 0; i--) {
		let noSwap = true;
		for (let j = 0; j < i - 1; j++) {
			if (nums[j] > nums[j + 1]) {
				let temp = nums[j];
				nums[j] = nums[j + 1];
				nums[j + 1] = temp;
				noSwap = false;
			}
		}
		if (noSwap) break;
	}
	return nums;
}
console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]

// console.log([1,2,3,4,5,6,7].sort((a,b)=> a-b));
// console.log(['adsfjaksdhfla','bdskjfhalsdhjfkhalsdf','csdjfhlasjhfd','ddsajdhs'].sort((a,b)=> a.length-b.length));

function bubbleSort(
	arr: number[],
	comparator: (a: number, b: number) => number,
) {
	if (arr.length === 0) return [];
	if (typeof comparator !== 'function') {
		comparator = function (a, b) {
			return a - b;
		};
	}
	let noswap;
	for (let i = arr.length; i > 0; i--) {
		noswap = true;
		for (let j = 0; j < i - 1; j++) {
			if (comparator(arr[j], arr[j + 1]) > 0) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				noswap = false;
			}
		}
		if (noswap) break;
	}
	return arr;
}

function bubbleSort2(arr: number[]): number[] {
	if (arr.length === 0) return [];
	let noswaps; // For optimisation
	//The idea is to bubble the largest number to the end of the array, so we use 2 for loops,
	// outer loop starts at the end of array and will track the already sorted element at the end and
	// inner loop will start at starting of the arrya and iterate unitl outer-1 to check if the inner and inner +1 which is bigger.
	for (let i = arr.length; i > 0; i--) {
		noswaps = true;
		console.log();
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				noswaps = false;
			}
		}
		if (noswaps) break;
	}
	return arr;
}
