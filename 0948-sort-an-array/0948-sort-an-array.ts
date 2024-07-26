function sortArray(arr: number[]): number[] {
    if(arr.length<=1) return arr;
    function merge(arr1: number[], arr2: number[]): number[] {
      return arr1.concat(arr2).sort((a, b) => a - b);
    }
    let mid = Math.floor(arr.length/2);
    let left = sortArray(arr.slice(0,mid));
    let right = sortArray(arr.slice(mid));
    return merge(left,right);
}