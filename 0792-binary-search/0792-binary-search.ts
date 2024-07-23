function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length-1;
    let middle = Math.floor((left+right)/2);

    while(left<=right){
        if(nums[middle]>target){
            right = middle -1;
        } 
        else if(nums[middle]<target ){
            left = middle +1;
        }
        else return middle;
        middle = Math.floor((left+right)/2);
    }
    return -1;
};