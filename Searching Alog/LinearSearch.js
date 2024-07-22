/*
Linear Search
Given an array, the simplest way to search for an values is to look 
at every element in the array and check if it's the value we want.

Js has search!!
There are many different search methods on arrays in JS.
-indexOf()
-includes
-find
-findIndex
These all uses linear search.

Linear Search BIG O
Best case - O(1)
Avg case - O(n)
worst case - O(n)
*/

function linearSearch(arr, num) {
  let index = 0;
  if (arr.length === 0) {
    return -1;
  }
  //using for of loop
  for (let val of arr) {
    if (val === num) {
      return index;
    }
    index++;
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5], 5));

//using for in loop
function linearSearch(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return -1;
  }
  for (let key in arr) {
    if (arr[key] === num) return parseInt(key);
  }
  return -1;
}
