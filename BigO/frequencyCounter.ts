//Write a function which takes in a string and returns counts of each character in the string.

function charCount(str: string): { [key: string]: number } {

    if (str.length === 0) return {}; //defualt case
    // fc is frequency counter
    let fc: { [key: string]: number } = {};

    //Trim the string and remove spaces
    str = str.trim().split(' ').join('');
    for (let val of str) {
        val = val.toLowerCase(); //convert to lower case
        fc[val] = (fc[val] || 0) + 1;
    }
    console.log(fc)
    return fc;

}

charCount('Hello Teja 1234')