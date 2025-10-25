function isPalindrome(n: number): boolean {
	// Handling negative numbers
	if (n === 0) return true;
	let nCopy = n;
    let str = n.toString().split("").reverse().join("");
    if(nCopy == parseInt(str)) return true
    else return false
}