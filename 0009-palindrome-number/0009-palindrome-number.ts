function isPalindrome(n: number): boolean {
	// Handling negative numbers
	if (n < 0) return false;
	let str = n.toString();
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