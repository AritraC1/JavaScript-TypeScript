let greetings: string = "Hello! Welcome to TypeScript";
// greetings = 6; // Type 'number' is not assignable to type 'string'.
console.log(greetings.toUpperCase());
console.log(greetings);

// The primitives: string, number, and boolean
// JavaScript has three very commonly used primitives: string, number, and boolean. Each has a corresponding type in TypeScript.

// 1. string represents string values like "Hello, world"
// 2. number is for numbers like 42. JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number
// 3. boolean is for the two values true and false

// Number 
let number: number = 6;
// number = "" // Type 'string' is not assignable to type 'number'.
console.log(number);

let userID: number = 334455;
console.log(userID);

// Boolean
let isLoggedIn: boolean = false

export {}