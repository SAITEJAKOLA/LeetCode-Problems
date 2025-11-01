/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i= 0;
    let j =1;
    while(j<nums.length){
        if(nums[i]===0 && nums[i]!==nums[j]){
            [nums[i],nums[j]]=[nums[j],nums[i]]
            i++;
            j++;
        } else if(nums[i]===0 && nums[j]===0){
            j++
        } else{
            i++;
            j++
        }
    }
};