// The core idea of selection sort is bring the min to first, then the second min to second and so on.
// So we have two loops, one to keep track of the current index and another to find the min in the remaining array.
// We can optimize it by keeping track of the min index and swapping only once at the end of each iteration.
// This way we can reduce the number of swaps from O(n^2) to O(n). The time complexity of selection sort is O(n^2)
// and space complexity is O(1).

function selectionSort(arr: number[]): number[] {
	const swap = (arr: number[], idx1: number, idx2: number) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (i !== min) swap(arr, i, min);
	}
	return arr;
}
console.log(selectionSort([5, 2, 3, 1])); // [1, 2, 3, 5]

function selectionsort(arr: number[]): number[] {
	if (arr.length === 0) return [];
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
	}
	return arr;
}
console.log(selectionsort([330, 19, 22, 78, 4]));

function selectionsort1(
	arr: number[],
	comp: (a: number, b: number) => number,
): number[] {
	if (arr.length === 0) return [];
	if (typeof comp !== 'function') {
		comp = function (a, b) {
			return a - b;
		};
	}
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (comp(arr[min], arr[j]) > 0) min = j;
		}
		if (i !== min) [arr[min], arr[i]] = [arr[i], arr[min]];
	}
	return arr;
}
