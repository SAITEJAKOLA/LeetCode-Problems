function groupAnagrams(strs: string[]): string[][] {
	if (strs.length === 0) return [];
	let map: { [key: string]: string[] } = {};

	for (let str of strs) {
		let sortedString = str.split('').sort().join('');
		if (!map[sortedString]) {
			map[sortedString] = [];
		}
		map[sortedString].push(str);
	}
	return Object.values(map);
}