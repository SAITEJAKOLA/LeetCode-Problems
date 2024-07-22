function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 0) return [];

  // Function to sort a string
  function sortString(str: string): string {
    return str.split('').sort().join('');
  }

  // Sort the strings based on their sorted version
  const sortedStrs = strs.map(str => ({ original: str, sorted: sortString(str) }));
  sortedStrs.sort((a, b) => a.sorted.localeCompare(b.sorted));

  // Group the anagrams
  const output: string[][] = [];
  let currentGroup: string[] = [];
  let currentKey = sortedStrs[0].sorted;

  for (let i = 0; i < sortedStrs.length; i++) {
    const { original, sorted } = sortedStrs[i];

    if (sorted === currentKey) {
      currentGroup.push(original);
    } else {
      output.push(currentGroup);
      currentGroup = [original];
      currentKey = sorted;
    }
  }

  // Push the last group
  if (currentGroup.length > 0) {
    output.push(currentGroup);
  }

  return output;
}