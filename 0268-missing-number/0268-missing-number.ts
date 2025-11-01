function missingNumber(nums: number[]): number {
    //first loop through the array and find the sum of all elements and also find the max in the array.
    let sum = 0;
    let max = nums.length;
    for(let i = 0; i< nums.length; i++){
        sum = sum + nums[i];
    }
    let expectedSum = max*(max+1)/2;
    if(sum === expectedSum) return 0;
    return expectedSum - sum;
};