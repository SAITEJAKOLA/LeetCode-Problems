function addUpTo(num: number): number {
    let total = 0;
    for (let i = 0; i <= num; i++) {
        total += i;
    }
    return total;
}
let t1 = performance.now();
console.log(addUpTo(100000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

const addUpToM = (num: number): number => {
    return num * (num + 1) / 2;
}
let t1M = performance.now();
console.log(addUpToM(100000000));
let t2M = performance.now();
console.log(`Time Elapsed: ${(t2M - t1M) / 1000} seconds`);