function reverse(x: number): number {
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