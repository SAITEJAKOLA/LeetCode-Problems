function singleNumber(nums: number[]): number {
    //We can use XOR operstion to find out unique element.
    // a (xOR) a = 0
    // a (XOR) 0 = a

    let xor = 0;
    for(let i =0; i<nums.length; i++){
        xor = xor ^ nums[i]
    }
    return xor;
}