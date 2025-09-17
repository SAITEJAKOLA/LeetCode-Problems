function topKFrequent(nums: number[], k: number): number[] {
    if(nums.length===0) return [];
    let map: {[key:number]:number}={};
    for(let val of nums){
        map[val]= (map[val]|0)+1;
    }
    //Object.entries will return something like this [[key, value], [key, value]]
	//sort the all the entries [key, value]
    const sortedArray = Object.entries(map).sort((a,b)=>b[1]-a[1]);
    //sortedArrya.slice(0,k) slices from 0 to k and top of that map return a [].
    return sortedArray.slice(0,k).map((val)=> parseInt(val[0]));
};