/*
What is recursion?
A process (a function) that calls itself.

In almost all program languages, there is a bult in data structure that manages what
happens when functions are invoked
It is named as Call stack.

The call Stack

- its a stack data structure
- Any time a function is invoked it is placed(pushed) on the top of the call stack.
- when js sees the retrun keyword or when the function ends, the compiler will remove(pop) 

Base case:
The condition when the recursion ends.

Two Essential parts of a recursive function!
1.)Base Case
2.)Different input.

Where things can go wrong.
1)No base case
2) Forgetting t return or returning the wring thing!!
*/

function countDown(num) {
	if (num <= 0) {
		//Base case
		console.log('All done!');
		return;
	}
	console.log(num);
	num--; //different value
	countDown(num);
}

countDown(5);

function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
}
sumRange(4);

//factorial
function factorial(num) {
	if (num === 0) {
		return 1;
	}
	return num * factorial(num - 1);
}
factorial(5);

/*
Helper Method Recursion
Design Pattern

function outer(input){
  var outScopedVariable = []
  function helper(helperinput){
    //modify the outScopedVariable
    helper(helperinput---)
  }
  helper(input)
  return outerScoperVaraibale;
}
*/

//collecting all odd values of an array

function collectOddValues(arr) {
	let result = [];
	function helper(helperInput) {
		if (helperInput.length === 0) return;
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}
		helper(helperInput.slice(1));
	}
	helper(arr);
	return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
/*
pure recursion

- For arrays, use methods like Slice, spread operator, and concat that makes copies of arrats so you do not mutate them.
- Remeber that strings are immuatble so you will need to use methods like Slice, substr, substring to make copies of strings.
- To make copies of objects use Objec.assign or the spread operator.
*/

function collectOddValuesR(arr) {
	let arrnew = [];
	if (arr.length === 0) return;
	if (arr[0] % 2 !== 0) {
		arrnew.push(arr[0]);
	}
	arrnew = arrnew.concat(collectOddValuesR(arr.slice(1)));
	return arrnew;
}
collectOddValuesR([1, 2, 3, 4, 5]);

//power

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
	if (exponent === 0) {
		return 1;
	}
	return base * power(base, exponent - 1);
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
	if (arr.length === 0) {
		return 1;
	}
	return arr[0] * productOfArray(arr.slice(1));
}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
	if (num === 0) {
		return 0;
	}
	return num + recursiveRange(num - 1);
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
	// add whatever parameters you deem necessary - good luck!
	if (num <= 2) {
		return 1;
	}
	return fib(num - 1) + fib(num - 2);
}

// Print n to 1 using recursion
function PrintNTo1(n) {
	if (n < 1) return;
	console.log(n);
	PrintNTo1(n - 1);
}

// print 1 to n using recursion
let n = 10;
function Print1ToN(num) {
	if (num > n) return;
	console.log(num);
	Print1ToN(++num);
}

Print1ToN(1);

//sum of first n natural numbers
function sumOfNNaturalNumbers(n) {
	if (n === 0) return 0;
	return n + sumOfNNaturalNumbers(n - 1);
}

// sum of all elements in an array
function sumOfArray(arr) {
	if (arr.length === 0) return 0;
	// The idea is add the first element to the sum of the rest of the array
	//slice creates a shallow copy of the array from index you pass to end
	return arr[0] + sumOfArray(arr.slice(1));
}
sumOfArray([1, 2, 3, 4, 5]);

// sum of all odd numbers in a array

function sumOfOddNumbers(arr) {
	if (arr.length === 1) return arr[0];
	if (arr[0] % 2 !== 0) {
		return arr[0] + sumOfOddNumbers(arr.slice(1));
	}

	return sumOfOddNumbers(arr.slice(1));
}

console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

/*
1 + sumOfOddNumbers([2, 3, 4, 5])
1 + sumOfOddNumbers([2,4,5])
1+ 3 +sumOfOddNumbers([4,5]
1+3+ sumOfOddNumbers([5])
*/

//Factorial of N numbers
function factorialofN(n) {
	if (n === 0) return 1;
	return n * factorialofN(n - 1);
}
