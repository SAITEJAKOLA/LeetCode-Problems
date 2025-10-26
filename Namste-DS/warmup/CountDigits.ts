function countDigits(n: number): number {
	if (n === 0) return 1;
	let count = 0;

	//Handling negative numbers
	n = Math.abs(n);
	while (n > 0) {
		//Handling decimal numbers
		n = Math.floor(n / 10);
		count++;
	}
	return count;
}
console.log(countDigits(-259));
