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

// using for loops -O(n2)
function SumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log(SumZero([-3, -2, -1, 0, 1, 2, 3]));

//using 2 pointers pattern o(n)
function SumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 1) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(SumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10, 11]));

//CountUniqueValues
//this can be dont using frequency counters and multiple pointers also
//The function takes an sorted array, there can be both + and -ve values.

//using multiple pointers.
function CountUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      j++;
    } else if (arr[i] !== arr[j]) {
      arr[i] = arr[j];
      i++;
    }
  }
  return i + 1;
}
console.log(CountUniqueValues([1, 1, 2, 3, 4, 4, 5, 6, 7, 8]));

//using frequency counters

function CountUniqueValues(arr) {
  let fc = {};
  for (let val of arr) {
    fc[val] = (fc[val] | 0) + 1;
  }
  console.log(fc);
  const uniqueval = Object.keys(fc);
  return uniqueval.length;
}

console.log(CountUniqueValues([1, 1, 2, 3, 4, 4, 5, 6, 7, 8]));
