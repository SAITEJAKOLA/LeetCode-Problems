//Write a function which takes in a string and returns counts of each character in the string.

function charCount(str: string): { [key: string]: number } {

    if (str.length === 0) return {}; //defualt case

    let fc: { [key: string]: number } = {};

    for (let val of str) {
        fc[val] = (fc[val] || 0) + 1;
    }
    console.log(fc)
    return fc;
    
}

charCount('HelloTeja1234')