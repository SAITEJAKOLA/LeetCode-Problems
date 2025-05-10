/*
Sliding Window
This pattern involves creating a window which can either be an array or number from one position to another.
Depending on a certain condition, the window either increases or closes(and a new window is create).

Very useful for keeping a track of a subset of data in an aray/string etc.....
*/

import { log } from "console";

/*
maxSubarraySum - which accepts an array of integers and a number called n.
The function should calculate the maxium sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2)//10 
maxSubarraySum([1,2,5,2,8,1,5],4)//17 
*/

//navie solution for maxSubArraySum
//Accepts an arrat of integers and a number n
//Requirement -  The function should calculate max sum of n consecutive elements in the array

function maxSubArraySum(arr: number[], n: number): number {
    if (arr.length === 0) return 0
    let max = 0;
    for (let i = 0; i <= arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++)
            temp += arr[i + j];
        if (temp > max) max = temp;
    }
    return max
}
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));

//Using sliding window method
function maxSubArraySumusingSlidingWindow(arr: number[], n: number): number {
    if (arr.length === 0) return 0
    let max = 0;
    let tempMax = 0;
    for (let i = 0; i < n; i++) max += arr[i];
    for (let i = 0; i < arr.length - n; i++) {
        // console.log(`Max: ${max} \n arr[i]: ${arr[i]} \n arr[i+n]: ${arr[i + n]}`);
        tempMax = max - arr[i] + arr[i + n]
        // console.log(`tempMax: ${tempMax}`);
        max = Math.max(max, tempMax)
    }
    //alternative solution is we can start at n and so the same stuff but go till end of the array
    // for(let i=n; i< arr.length; i++){
    // tempMax = max - arr[i-n]+ arr[i]
    // max = Math.max(max, tempMax)
    //}
    return max;
}
console.log(maxSubArraySumusingSlidingWindow([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySumusingSlidingWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));