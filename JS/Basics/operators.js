// <---- OPERATORS ---->

// Arithmatic Operators

let a = 2;
let b = 4;

// Addition
console.log("a + b = ", a+b);

// Subtraction
console.log("a - b = ", a-b); 

// Multiplication
console.log("a * b = ", a*b);

// Division
console.log("a / b = ", a/b); 

// Modulus (Prints Remainder)
console.log("a % b = ", a%b); 

// Exponent (power)
console.log("a ** b = ", a**b);

// Increment (a++, ++a)
console.log("a++ = ", a++); // Pahele print hoga then a = a + 1
console.log("++a = ", ++a); // Now value is a+1, phir increment hoga so now value is a = a + 2

// Decrement (a--, --a)
console.log("a-- = ", a--);
console.log("--a = ", --a);

// Assignment Operators 
let num = 1;

num += 5 // same as num = num + 5
console.log("a is now = ", a)

num -= 5 // same as num = num - 5
console.log("a is now = ", a)

num *= 5 // same as num = num * 5
console.log("a is now = ", a)

num /= 5 // same as num = num / 5
console.log("a is now = ", a)

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

// Comments
// This is a single line comment
/* This is a sample multiline comment and a tutorial
from 
codewithharry */

// Question
console.log(3 + 4 * 5 % 3); // output is 5

/*

1. 4 * 5 = 20
2. 20 % 3 = 2
3. 3 + 2 = 5

5 is the solution

*/