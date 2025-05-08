function isAnagram(s: string, t: string): boolean {
    s = s.toLowerCase();
    t = t.toLowerCase();
    if(s.length !== t.length) return false
    let f1: {[key:string]: number} = {}
    let f2: {[key:string]: number} = {}
    for(let val of s){
        f1[val] = (f1[val] || 0)+1;
    }
    for(let val of t){
        f2[val] = (f2[val] || 0)+1
    }
    for(let key in f1){
        let numKey = Number(key)
        if(!(key in f2)) return false
        if(f2[key] !== f1[key]) return false
    }
    return true
};