function sortArray(nums: number[]): number[] {
  for (let i = nums.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return nums;
}
console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]

// console.log([1,2,3,4,5,6,7].sort((a,b)=> a-b));
// console.log(['adsfjaksdhfla','bdskjfhalsdhjfkhalsdf','csdjfhlasjhfd','ddsajdhs'].sort((a,b)=> a.length-b.length));
