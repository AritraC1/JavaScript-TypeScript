// Guess The Number

const prompt = require("prompt-sync")();

console.log("GUESS THE NUMBER FROM 1 TO 10")

console.log()

let value = Math.floor((Math.random() * 10) + 1);

let numberOfGuesses = 5;

while (numberOfGuesses > 0) {
    let userInput = prompt("Enter the value = ");
    if (userInput == value) {
        console.log("Sahi Jawab")
        break;
    }
    else {
        console.log("Galat Jawab");
        numberOfGuesses--;

        if (userInput < value){
            console.log("Greater")
        }
        else {
            console.log("Lesser")
        }
    }
}

if (numberOfGuesses === 0) {
    console.log("Game Over! The correct answer was: ", value);
}