const prompt = require("prompt-sync")();

function isAnagram(String1, String2) {
    String1 = String1.replace(/\s/g, '').toLowerCase()
    String2 = String2.replace(/\s/g, '').toLowerCase()

    // checking is lengths are same
    if (String1.length != String2.length) return false

    // Sorting and comparing the strings
    return String1.split('').sort().join('') === String2.split('').sort().join('')
}

let userInput1 = prompt("Enter String1 = ");
let userInput2 = prompt("Enter String2 = ");

console.log(isAnagram(userInput1, userInput2))