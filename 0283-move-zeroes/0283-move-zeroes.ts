/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i = 0;
    let j = 0;
    while(i<nums.length){
        if(nums[i]!==0){
            [nums[i],nums[j]] = [nums[j],nums[i]]
            i++;
            j++;
        } else {
            i++;
        }
    }
}; 