function singleNumber1(nums: number[]): number {
	if (nums.length === 0) return 0;
	let fc: { [key: number]: number } = {};
	for (let val of nums) {
		fc[val] = (fc[val] | 0) + 1;
	}
	for (let key in fc) {
		if (fc[key] === 1) return parseInt(key);
	}
	return -1;
}

console.log(singleNumber1([4, 1, 2, 1, 2]));
