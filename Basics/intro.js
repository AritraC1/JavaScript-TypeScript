//// JAVASCRIPT (JS) ////

// JS is a Single Threaded and Synchronous language (reads the code line by line instead of compiling all the lines). It is also case sensitive
// It is based on ECMAscript (It is a standard which was created to ensure that different docs on JS are actually talking about the same language). 

// WORKING ->
// 1. Reads the code line by line
// 2. checks for variables and functions and allocates their memory

// Technical Jargons/Terminologies
// Global Execution context - empty call stack which is formed at the starting (only 1)
// Execution context - Stack with all the code
// Functions have a higher priority as compared to anything in JS. They have there own execution stack

// Stored/ Reserved
// console.log -> like print statement but its logs(records) data into the console
console.log("Hello World");

// Note:-
console.log(console.log(console.log(console.log()))); // one time undefined show krega only in inspect chrome 

// We are using JavaScript but nodejs wala

// <---- Variables in JS ---->

// A variable is a container that stores a value. There are 3 types of variables in JS : var, const, let

// Var (Mutable since its value is changeable - so it is not used at all) GLOBALLY SCOPED matlab kahi se bhi change kr skte ho 
var name = "Dan";
console.log(name); // 'a' is a String

var name = 23;
console.log(name); // 'a' is an int

// Let (Can be re-assigned/re-updated but cannot be re-declared, It is used to declare block scoped variables )
let fruit = "apple"; // declared fruit = apple
// let fruit = "grape" throws an error that fruit cannot be re-assigned
fruit = "banana"; // banana was reassigned to fruit
console.log(fruit);

// Const (Const is constant that is fixed - Cannot be re-assigned or re-declared) BLOCK SCOPED
const constant = "Mango";
console.log(constant);
// const c = "Orange" -> throws an error cannot be re-dclared
// c = "Kiwi" -> throws an error cannot be re-assigned

// *** Always use let and const, avoid var

const accountID = 144553
let email = "abc@google.com"
var password = "abc@123" // not used
city = "Delhi" 
let state; // semi-colon ';' is not reqd

// accountID = 2 // Error

console.log(accountID)

email = "xyz@gmail.com"
password = "xyz@321"
city = "Gurgaon"

console.table([accountID, email, password, city, state]) // prints in tabular form



// <---- Primitive Data Types and Objects ---->

// There are 7 types of primitive data (basic) types in JS : Null, Number, String, Symbol, Undefined, Boolean, BigInt
let a = null;
let b = 123; // number (maximum safe integer: 2 to power 53)
let c = "World";
let d = Symbol("Yo! This is a symbol");
let e = undefined;
let f = true;
let g = BigInt("567");
console.log(a,b,c,d,e,f,g);
console.log(typeof d); // prints synbol

// Objects - Non primitive Data types (key-value pair)
const items = {
    "Name" : "Tony",
    "Age" : 12,
    "Sex" : 'M',
    "Marital Status" : false,
}
console.log(items["Name"]);

items["friend"] = "Rogers";

console.log(items);

console.log(typeof null) // null is an object
console.log(typeof undefined) // undefined is undefined