function removeElement(nums: number[], val: number): number {
    if(nums.length === 0) return 0;
    let i=0;
    let j= nums.length;

    // The idea is to replace matched element with a valid element from j-1 unitll i<j;
    while(i<j){
        if(nums[i]===val){
            nums[i]= nums[j-1];
            nums[j] = val;
            j--;
        }
        else{
            i++;
        }
    }
    return j;
};