const arr = [1,[2,3],[4,[5,6]],[7,8]];

function highestDegree(arr){
    if(!Array.isArray(arr)) return 0;
    let maxDepth = 1;
    for(let val of arr){
        if(Array.isArray(val)){
            const depth = 1 + highestDegree(val);
            if(depth>maxDepth){
                maxDepth = depth;
            }
        }    
    }
    return maxDepth;
}
console.log(highestDegree(arr)); // 3