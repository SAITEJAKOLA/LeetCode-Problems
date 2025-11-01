function isPalindrome1(x: number): boolean {
	// Handling negative numbers
	if (x < 0) return false;
	let str = x.toString();
	let left = 0;
	let right = str.length - 1;
	let middle = Math.floor(str.length / 2);
	while (left <= middle && right >= middle) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
}

// console.log(isPalindrome(-121));

function isPalindromString(x: number): boolean {
	if (x <= 0) return false;
	let nCopy = x;
	let str = x.toString().split('').reverse().join('');
	if (nCopy == parseInt(str)) return true;
	else return false;
}
// console.log(isPalindromString(-121));

//Reversing of a number

function reverse1(x: number): number {
	let sign = Math.sign(x);
	if (x < 0) x = Math.abs(x);
	if (x === 0) return 0;
	let str = x.toString().split('');
	let left = 0;
	let right = str.length - 1;
	let middle = Math.floor(str.length / 2);
	while (left < right) {
		[str[left], str[right]] = [str[right], str[left]];
		left++;
		right--;
	}
	if (
		sign * parseInt(str.join('')) > 2 ** 31 - 1 ||
		sign * parseInt(str.join('')) < -(2 ** 31)
	)
		return 0;
	return sign * parseInt(str.join(''));
}
console.log(reverse(-12345));
console.log(reverse(-1200));
console.log(reverse(0));
