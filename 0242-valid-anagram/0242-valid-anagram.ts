function isAnagram(s: string, t: string): boolean {
    s = s.toLowerCase();
    t = t.toLowerCase();
    if(s.length !== t.length){
        return false;
    }
    let fc1: {[key:string]:number} = {};
    let fc2: {[key:string]:number} = {};

    for(let val of s){
        fc1[val] = (fc1[val]|| 0)+1;
    }

    for(let val of t){
        fc2[val] = (fc2[val]||0)+1;
    }
    for(let key in fc1){
        if(!(key in fc2)){
            return false;
        }
        if(fc1[key]!==fc2[key]){
            return false;
        }
    }
    return true;
};