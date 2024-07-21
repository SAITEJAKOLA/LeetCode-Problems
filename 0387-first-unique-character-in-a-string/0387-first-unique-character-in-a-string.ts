function firstUniqChar(s: string): number {
    s = s.toLowerCase();
    if(s.length === 0) return 0;
    let fc: {[key:string]:number} = {};
    for(let val of s){
        fc[val] = (fc[val]||0)+1;
    }
    console.log(fc);
    for(let key in fc){
        if(fc[key]===1){
            return s.indexOf(key);
        }
    }
    return -1;
};