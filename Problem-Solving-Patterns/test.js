const arr = [2, 4, 1, 3];

const prefix = [0];

for (const value of arr) {
	prefix.push(prefix[prefix.length - 1] + value);
}

console.log(prefix);
// [0, 2, 6, 7, 10]
