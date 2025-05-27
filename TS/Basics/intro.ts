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

// ': dataType' is not required when we are directly declaring the value. It is redundant. TS is smart enough to figure it out itself.
let userID = 334455;
// userID = 4454.3
console.log(userID);

// Boolean
let isLoggedIn: boolean = false

// Any
// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.

let hero;

function getHero() {
    return "SpiderMan";
}

hero = getHero()

export {}