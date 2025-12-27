function isPowerOfTwo(n: number): boolean {
    /*
    2^0 = 1
    2^1 = 2
    2^3 = 8
    - if n is power of 2 keep dividing it by 2 until you reach 1 (base condition)
    - if n is odd then it can never be a power of 2
    - if n < 1 then it can never be a power of 2
    */
    if(n === 1) return true;
    else if (n<1 || (n%2 !==0)) return false;

    return isPowerOfTwo(n/2)
};