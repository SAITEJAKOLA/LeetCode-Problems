function maxSubArraySum(arr: number[], n: number): number {
    if (arr.length === 0) return 0
    let max = 0;
    for (let i = 0; i <= arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++)
            temp += arr[i + j];
        if (temp > max) max = temp;
    }
    return max
}
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));