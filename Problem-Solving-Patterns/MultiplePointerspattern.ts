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
console.log("----------sumZeroM");
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
console.log("----------CountUniqueValues");
console.log(CountUniqueValues([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8]));


//Easier way of doing is using frequency counters
function CountUniqueValuesUsingFC(arr: number[]): number {
    if (arr.length === 0) return 0
    let fc: { [key: number]: number } = {}
    for (let val of arr) fc[val] = (fc[val] || 0) + 1
    return Object.keys(fc).length
}
console.log("----------CountUniqueValuesUsingFC");
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
console.log("----------areThereDuplicates");
console.log(areThereDuplicates(1, 2, 3, 4, 2));
/*
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair(arr: number[], n: number): boolean {
    if (arr.length === 0) return false;
    let left = 0
    let right = arr.length - 1;
    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2
        if (avg == n) return true
        else if (avg < n) left++;
        else right--;
    }
    return false
}
console.log("----------averagePair");
console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));

/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

function isSubsequence(str1: string, str2: string): boolean {
    if (str1.length === 0 || str2.length === 0) return false;
    let i = 0;
    let j = 0;
    while (j <= str2.length - 1) {
        if (str1[i] === str2[j]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false
}
console.log("----------isSubsequence");
console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));// false
console.log(isSubsequence('abc', 'acb'));// false
console.log(isSubsequence('abc', 'abracadabra'));

/*
Frequency Counter / Multiple Pointer - findPair
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

findPair([6,1,4,10,2,4], 2) // true
findPair([8,6,2,4,1,0,2,5,13],1) // true
findPair([4,-2,3,10],-6) // true
findPair([6,1,4,10,2,4], 22) // false
findPair([], 0) // false
findPair([5,5], 0) // true
findPair([-4,4], -8) // true
findPair([-4,4], 8) // true
findPair([1,3,4,6],-2) // true
findPair([0,1,3,4,6],-2) // true
findPair([1,2,3], 0) // false
Part 1 - solve this with the following requirements:

Time Complexity Requirement - O(n)

Space Complexity Requirement - O(n)

Part 2 - solve this with the following requirements:

Time Complexity Requirement - O(n log n)

Space Complexity Requirement - O(1)
*/
function findPairUsingMP(arr: number[], n: number): boolean {
    if (arr.length === 0) return false;
    //first lets sort the array and check the difference for each 2 elements of the array using i and j
    arr.sort((a, b) => a - b);
    let i = 0;
    let j = 1;
    while (i < arr.length && j < arr.length) {
        if (i !== j) {
            let difference = arr[j] - arr[i]
            if (difference === Math.abs(n)) return true;
            else if (difference < Math.abs(n)) i++
            else j++;
        }
        else j++;
    }
    return false;
}
console.log("----------findPairUsingMP");
console.log(findPairUsingMP([6,1,4,10,2,4], 2));