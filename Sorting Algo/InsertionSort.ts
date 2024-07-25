function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    console.log(
      'Before reassigning current value to arr[i]/arr[j+1]',
      arr[j + 1]
    );
    arr[j + 1] = currentVal;
    console.log(
      'After reassigning current value to arr[i]/arr[j+1]',
      arr[j + 1]
    );
  }
  return arr;
}
console.log(insertionSort([10, 21, 32, 14, 9, 5, 16]));
