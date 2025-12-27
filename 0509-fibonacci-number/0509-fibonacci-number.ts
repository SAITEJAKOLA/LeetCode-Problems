function fib(n: number): number {
/*
  // Iterative approach
  let arr = new Array(n);
  /*
  f(0) = 0;
  f(1) = 1;
  f(n) = f(n-1)+f(n-2)
  
  arr[0] = 0;
  arr[1] = 1;
  for(let i=2; i<=n; i++){
    arr[i] = arr[i-1]+arr[i-2];
  }
  return arr[n];
  */

  //Recursive approach
  if(n<=1) return n; // Base Case
  return fib(n-1)+fib(n-2);
};