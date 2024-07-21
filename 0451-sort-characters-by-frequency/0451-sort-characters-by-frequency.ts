function frequencySort(s:string):string{
    if(s.length === 0) return s;

    let fc : {[key:string]:number} = {};
    for(let val of s){
        fc[val] = (fc[val] || 0)+1;
    }
    console.log(fc);

    let sortedArray = Object.entries(fc).sort((a,b)=>{
        if((b[1]-a[1])===0){
            return a[0].localeCompare(b[0]);
        }
        return b[1]-a[1];
    });
    console.log(sortedArray);
        const sortedString = sortedArray.map(([char, freq]) =>
          char.repeat(freq)).join('');
    return sortedString;
}