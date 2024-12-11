// <---- LOOPS ---->

const prompt = require("prompt-sync")();

// Program to add first n natural numbers
let sum = 0;
let n = prompt("Enter the value of n = ");

n = Number.parseInt(n);

for (let i = 0; i < n; i++) {
  sum += (i + 1);
  // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is = " + sum);
// console.log(i)

console.log();

let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop - Loops through the keys of the object also works with arrays
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

console.log();

// For of loop - loops through the value of an object
for (let b of "Harry") {
  console.log(b);
}

console.log();
console.log();

// <---- ARRAYS + LOOPS ---->

let num = [1,2,3,4,5];

for (let i = 0; i<num.length; i++) {
  console.log(num[i]);
}

console.log();

num.forEach((element) => {
  console.log(element*element);
})

// From - converts string into array
let name = "Tony";
let arr = Array.from(name);
console.log(arr);

console.log();

// Shortcut to access array elements
for (let i of num) {
  console.log(i);
}

console.log();

// Prints the index
for (let i in num) {
  console.log(i);
}

console.log();

// Prints the elements in the array
for (let i in num) {
  console.log(num[i]);
}