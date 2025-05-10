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
same([1, 2, 3], [1, 4, 9])

/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(n: number, m: number): boolean {
    let num1 = n.toString();
    let num2 = m.toString();
    let fc1: { [key: string]: number } = {}
    let fc2: { [key: string]: number } = {}
    for (let val of num1) { fc1[val] = (fc1[val] || 0) + 1 }
    for (let val of num2) { fc2[val] = (fc2[val] || 0) + 1 }
    console.log(`fc1: ${JSON.stringify(fc1)} \n fc2: ${JSON.stringify(fc2)}`);
    //now check the if the both the frequencies has same key and and same values

    for (let key in fc1) {
        if (!(key in fc2)) return false
        if (fc1[key] !== fc2[key]) return false
    }
    return true;

}
console.log(sameFrequency(123, 323));

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

function areThereDuplicatess(...args: (string | number)[]): boolean {
    let fc: { [key: number | string]: number } = {}
    for (let val of args) {
        if (fc[val]) return true;
        fc[val] = 1
    }
    return false
}
console.log(areThereDuplicatess('a', 'b', 'c', 'a'));
console.log(areThereDuplicatess(1, 2, 2));
console.log(areThereDuplicatess(1, 2, 3));
/*
Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
*/

function constructNote(str1: string, str2: string): boolean {
    // add whatever parameters you deem necessary - good luck!
    if (str1.length === 0 && str2.length === 0) return true;
    str1.toLowerCase();
    str2.toLowerCase();
    let fc1: { [key: string]: number } = {}
    let fc2: { [key: string]: number } = {}
    for (let val of str1) { fc1[val] = (fc1[val] || 0) + 1; }
    for (let val of str2) { fc2[val] = (fc2[val] || 0) + 1; }

    for (let key in fc1) {
        if (!(key in fc2)) return false
        if (fc1[key] > fc2[key]) return false
    }
    return true;
}
constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true