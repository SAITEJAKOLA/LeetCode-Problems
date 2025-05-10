/*
Multiple pointers 
Creating pointers or values that correspond to an idex or position
and move towards the begining, end or middle based on certain condition.

Very efficient for solving problems with minimal space complecity as well.
losely defined, the direction of pointers deepending upon the problem.
*/

//SumZero - which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
//Return an array that includes both the values that sum zero or undefined if a pair does not exist.
//SumZero([-3,-2,-1,0,1,2,3])retuns [-3,3]

function sumZero(arr: []): number[] {
    if (arr.length === 0) return []
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
    return []
}

//using 2 pointer mechanisam

function sumZeroM(arr: number[]): number[] {
    if (arr.length === 0) return []
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) return [arr[left], arr[right]]
        if (sum > 0) right--
        else left++
    }
    return []
}
console.log(sumZeroM([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));



//CountUniqueValues
//this can be dont using frequency counters and multiple pointers also
//The function takes an sorted array, there can be both + and -ve values.

//using multiple pointers.

function CountUniqueValues(arr: number[]): number {
    if (arr.length === 0) return 0
    let i = 0;
    for (let j = 1; j <= arr.length - 1; j++) {
        if (arr[i] === arr[j]) j++;
        if (arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
console.log(CountUniqueValues([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8]));


//Easier way of doing is using frequency counters
function CountUniqueValuesUsingFC(arr: number[]): number {
    if (arr.length === 0) return 0
    let fc: { [key: number]: number } = {}
    for (let val of arr) fc[val] = (fc[val] || 0) + 1
    return Object.keys(fc).length
}

console.log(CountUniqueValuesUsingFC([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]));

/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

function areThereDuplicates(...args: (string | number)[]): boolean {
    if (args.length === 0) return false
    args.sort()
    for (let j = 0; j < args.length; j++) {
        if (args[j] === args[j + 1]) return true
    }
    return false
}

console.log(areThereDuplicates(1, 2, 3, 4, 2));