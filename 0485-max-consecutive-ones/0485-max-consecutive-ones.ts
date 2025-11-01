function findMaxConsecutiveOnes(nums: number[]): number {
	if (nums.length === 0 && nums[0] === 1) return 1;
	let maxCount = 0;
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			count++;
            continue;
		} else {
			if (count > maxCount) {
				maxCount = count;
			}
			count = 0;
		}
	}
	return Math.max(maxCount, count);;
}