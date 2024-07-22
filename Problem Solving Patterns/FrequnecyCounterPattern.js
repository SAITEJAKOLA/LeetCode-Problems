/*
Frequencey Counter Pattern uses Objects or sets 
to collect values/frequencies of values.

This can often avoid the need for nested loops or O(N^2) 
operations with arrays/strings.

We generally use this when we have multiple inputs and we need to compare them.
*/

// Write a function called same, which accepts two arrays.
//The function should return true if every value in the array has it's corresponding value squared in the second array.
//The frequency of values must be the same.
//same([1,2,3]), [4,1,9]) // true

//using for loop
// function same(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex == -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// console.log(same([1, 2, 3], [1, 4, 9]));

//using frequencey counter pattern - o(n)

function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  let fc1 = {};
  let fc2 = {};
  for (let val of arr1) {
    fc1[val] = (fc1[val] | 0) + 1;
  }
  for (let val of arr2) {
    fc2[val] = (fc2[val] | 0) + 1;
  }
  console.log(fc1, fc2);
  for (let key in fc1) {
    if (!(key ** 2 in fc2)) {
      return false;
    }
    if (fc2[key ** 2] != fc1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([1, 2, 3], [1, 4, 9]));

//anagarams - An anagaram is a word, phrase or anme formed by rearranging the letters of another.(cinema-iceman)
function validAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length) {
    return false;
  }
  let fc1 = {};
  let fc2 = {};
  for (let val of str1) {
    fc1[val] = (fc1[val] | 0) + 1;
  }
  for (let val of str2) {
    fc2[val] = (fc2[val] | 0) + 1;
  }
  console.log(fc1, fc2);
  for (let key in fc1) {
    if (!(key in fc2)) {
      return false;
    }
    if (fc2[key] != fc1[key]) {
      return false;
    }
  }
  return true;
}
console.log(validAnagram('hello', 'Hello'));
