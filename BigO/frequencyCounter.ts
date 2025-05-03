//Write a function which takes in a string and returns counts of each character in the string.

import { realpathSync } from 'fs';

function charCount(str: string): { [key: string]: number } {
    if (str.length === 0) return {}; //defualt case
    // fc is frequency counter
    let fc: { [key: string]: number } = {};

    for (let val of str) {
        val = val.toLowerCase(); //convert to lower case

        //one way fo doing is using regX /[a-z0-9]/.test(val)
        if (isAlphraNumeric(val)) fc[val] = (fc[val] || 0) + 1;
    }
    console.log(fc);
    return fc;
}
function isAlphraNumeric(char: string): boolean {
    let code = char.charCodeAt(0);
    if (
        !(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)
    ) {
        return false;
    }
    return true;
}

charCount('Hello Teja 1234!!!');
