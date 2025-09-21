function groupAnagrams(strs: string[]): string[][] {
	if (strs.length === 0) return [];
	let map = new Map<string, string[]>();

	for (let value of strs) {
		let sortedString = value.split('').sort().join('');
		console.log(sortedString);
		if (!map.has(sortedString)) map.set(sortedString, []);
		map.get(sortedString)!.push(value);
	}
	return Array.from(map.values());
};