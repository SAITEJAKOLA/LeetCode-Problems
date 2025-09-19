function removeDuplicates(nums: number[]): number {
    if(nums.length===0) return 0;
    let i=0;
    let j=i+1;
    while(j<nums.length){
        //Now the idea is to use the same array to manitain the unique element count.
        //By copying the non repated numbers to the front of array.
        if(nums[i]===nums[j]) j++;
        else if(nums[i]!==nums[j]){
            i++;
            nums[i]= nums[j];
            j++;
        }
    }
    //As asked in the question we print the nums also by replacing non unique values will some other value.
    console.log(nums.fill(0,i+1,nums.length))
    return i+1;
};