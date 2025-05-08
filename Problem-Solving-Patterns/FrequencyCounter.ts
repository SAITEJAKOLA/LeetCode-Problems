//Write a function called same, which accepts two arrays. 
// The function should return true if every value in the array has it's corresponding value squared in the second array. 
// The frequency of values must be the same.

function same(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) return false
    let fc1: { [key: number]: number } = {};
    let fc2: { [key: number]: number } = {}
    for (let val of arr1) {
        fc1[val] = (fc1[val] || 0) + 1;
    }
    for (let val of arr2) {
        fc2[val] = (fc2[val] || 0) + 1
    }
    console.log(fc1, fc2);
    for (let key in fc1) {
        let numkey = Number(key)
        //check if the key^2 is available in fc2 if not return false
        if (!(numkey ** 2 in fc2)) return false
        //check if key counts are matching in fc2 and fc1
        if (fc2[numkey ** 2] != fc1[key]) return false
    }
    return true

}
same([1,2,3], [1,4,9])