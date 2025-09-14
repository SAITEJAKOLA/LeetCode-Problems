function mergeSortArray(arr: number[]): number[] {
	if (arr.length <= 1) return arr;
	function merge(arr1: number[], arr2: number[]): number[] {
		let result: number[] = [];
		let i = 0;
		let j = 0;
		while (i < arr1.length && j < arr2.length) {
			if (arr2[j] >= arr1[i]) {
				result.push(arr1[i]);
				i++;
			} else {
				result.push(arr2[j]);
				j++;
			}
		}
		while (i < arr1.length) {
			result.push(arr1[i]);
			i++;
		}
		while (j < arr2.length) {
			result.push(arr2[j]);
			j++;
		}
		return result;
	}
	let mid = Math.floor(arr.length / 2);
	let left = mergeSortArray(arr.slice(0, mid));
	let right = mergeSortArray(arr.slice(mid));
	return merge(left, right);
}
