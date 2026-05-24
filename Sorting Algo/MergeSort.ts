//Here the whole idea revolves around using recurssion,
// breaking down the arrays into smaller arrays and then compare the individual arrays and merge them back into one.

//Psuedo code
// Split the arrays into two half and further split them into equals until you reach 1 element an array.
// Use a helper function merge which will check each element of 2 arrays passed into it
// and compares each elements of both the arrays and pushed in an order.

function merge1(arr1: number[], arr2: number[]): number[] {
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
// console.log(merge([1,10,50,100],[2,14,99,100,-1]));

function mergeSort(arr: number[]): number[] {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge1(left, right);
}
console.log(mergeSort([10, 24, 76, 73]));

let compator = (a, b) => a - b;
function merge2(
	arr1: number[],
	arr2: number[],
	compator: (a: number, b: number) => number = (a, b) => a - b,
): number[] {
	let result: number[] = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (compator(arr1[i], arr2[j]) < 0) {
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

function mergeSort1(
	arr: number[],
	compator: (a: number, b: number) => number,
): number[] {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort1(arr.slice(0, mid), compator);
	let right = mergeSort1(arr.slice(mid), compator);
	return merge2(left, right, compator);
}
