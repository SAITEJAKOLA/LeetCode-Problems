function missingNumber(nums: number[]): number {
    //first loop through the array and find the sum of all elements.
    //n = nums.length.
    let sum = 0;
    let n = nums.length;
    for(let i = 0; i< nums.length; i++){
        sum = sum + nums[i];
    }
    let expectedSum = n*(n+1)/2;
    if(sum === expectedSum) return 0;
    return expectedSum - sum;
};