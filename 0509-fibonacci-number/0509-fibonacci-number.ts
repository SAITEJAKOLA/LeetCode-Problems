function fib(n: number): number {
  // Iterative approach
  let arr = new Array(n);
  arr[0] = 0;
  arr[1] = 1;
  for(let i=2; i<=n; i++){
    arr[i] = arr[i-1]+arr[i-2];
  }
  return arr[n];
};