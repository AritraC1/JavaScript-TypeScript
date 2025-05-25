// String Palindrome Checker

const prompt = require("prompt-sync")();

function isPalindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase() // /g is global and \s is for white space removal
    const l = str.length;

    for (let i = 0; i < l/2; i++) {
        if (str[i] !== str[l - i -1]){
            return "Not a Palindrome"
        }
    }

    return "Palindrome"
}

let str = prompt("Enter a string: ")
console.log(isPalindrome(str))