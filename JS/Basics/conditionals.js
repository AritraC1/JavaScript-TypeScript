// <---- CONDITIONALS ---->

// importing prompt (using npm)
const prompt = require("prompt-sync")();

let a = prompt("Hey whats you age? ");
a = Number.parseInt(a); // Converting the string to a number

if(a<0){
  console.log("This is an invalid age");
}
else if(a<9){
  console.log("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  console.log("You are a kid and you can think of driving after 18");
}
else{
  console.log("You can now drive as you are above 18");
}

// HomeWork - Explore switch statement and write a basic program in the comments
// console.log("You can", (a<18? "not drive" :"drive"))

// console.log("2" > 1); // true
// console.log("2" < 1); // false
 
// console.log(null > 0);
// console.log(null < 0);
// console.log(null == 0);
// console.log(null >= 0);

// Always false
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


// Strict Check
// Not only checks the value but also checks the data type

console.log("2" == 2); // true, Starts conversion
console.log("2" === 2); // false
 
