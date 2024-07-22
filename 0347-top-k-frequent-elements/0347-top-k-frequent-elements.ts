function topKFrequent(nums: number[], k: number): number[] {
    if(nums.length ===0 ) return nums;
    let fc: { [key: number]: number } = {};

    for(let val of nums){
        fc[val] = (fc[val]||0)+1;
    }
    const sortedArray = Object.entries(fc).sort((a,b)=> b[1]-a[1]);
    const finalArray = sortedArray.slice(0,k).map((val)=> parseInt(val[0]));
    return finalArray;
};