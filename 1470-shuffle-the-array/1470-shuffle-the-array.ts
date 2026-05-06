//shuffle array
//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
//Return the array in the form [x1,y1,x2,y2,...,xn,yn].
function shuffleArray(arr: number[], n: number): number[] {
	// create a new empty array to hold the shuffled elements
	// lets start with postions already filled which is arr[0], arr[n+1]
	// then arr[1], arr[n+2] and so on
	let result: number[] = [];

	for (let i = 0; i < n; i++) {
		result.push(arr[i]);
		result.push(arr[i + n]);
	}
	return result;
}

function shuffle(nums: number[], n: number): number[] {
	let result: number[] = new Array(2 * n);
	for (let i = 0; i < n; i++) {
		result[2 * i] = nums[i];
		result[2 * i + 1] = nums[n + i];
	}
	return result;
}

console.log('------------shuffleArray');
// console.log(shuffleArray([2,5,1,3,4,7],3));
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
