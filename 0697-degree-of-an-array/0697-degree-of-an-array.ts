function findShortestSubArray(nums: number[]): number {
    if(!Array.isArray(nums)) return 0;
    let fc: {[key:number]:number} = {};

    for(let val of nums){
        fc[val] = (fc[val]|| 0)+1;
    }
    let max = 0;
    let maxKey = 0;
    for(let key in fc){
        if(fc[key]>max){
            max = fc[key];
        }
    }
    let minLength = nums.length;
    for(let key in fc){
        if(fc[key] === max){
            let firstIndex = nums.indexOf(Number(key));
            let lastIndex = nums.lastIndexOf(Number(key));
            minLength = Math.min( minLength, lastIndex-firstIndex+1);
        }
    }
    return minLength;
};