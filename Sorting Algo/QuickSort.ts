function pivot(arr: number[], start = 0, end = arr.length - 1) {
	const swap = (arr: number[], idx1: number, idx2: number) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	let p = arr[start];
	let sidx = start;
	for (let i = start + 1; i <= end; i++) {
		if (p > arr[i]) {
			sidx++;
			swap(arr, sidx, i);
			console.log(arr);
		}
	}
	swap(arr, start, sidx);
	console.log(arr);
	return sidx;
}

console.log(pivot([4, 7, 8, 5, 3, 2, 1, 9, 10]));

function quickSort(arr: number[], left = 0, right = arr.length - 1): number[] {
	if (left < right) {
		let p = pivot(arr, left, right);
		quickSort(arr, 0, p - 1);
		quickSort(arr, p + 1, right);
	}
	return arr;
}
console.log(quickSort([4, 7, 8, 5, 3, 2, 1, 9, 10]));
