function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 0) return [strs];
  function validAnagaram(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let fc1: { [key: string]: number } = {};
    let fc2: { [key: string]: number } = {};
    for (let val of str1) {
      fc1[val] = (fc1[val] || 0) + 1;
    }
    for (let val of str2) {
      fc2[val] = (fc2[val] || 0) + 1;
    }

    for (let key in fc1) {
      if (!(key in fc2)) return false;
      if (fc1[key] !== fc2[key]) return false;
    }
    return true;
  }

  let output: string[][] = [];
  let usedArray: boolean[] = new Array(strs.length).fill(false);

  for (let i = 0; i < strs.length; i++) {
    if (usedArray[i]) continue;
    let group: string[] = [strs[i]];
    usedArray[i] = true;

    for (let j = i + 1; j < strs.length; j++) {
      if (!usedArray[j] && validAnagaram(strs[i], strs[j])) {
        group.push(strs[j]);
        usedArray[j] = true;
      }
    }
    output.push(group);
  }
  return output;
}
