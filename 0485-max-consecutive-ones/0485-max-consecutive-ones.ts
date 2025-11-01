function findMaxConsecutiveOnes(nums: number[]): number {
	if (nums.length === 0 && nums[0] === 1) return 1;
	let maxCount = 0;
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			count++;
		} else {
			count = 0;
		}
        maxCount = Math.max(count, maxCount)
	}
	return maxCount;
}