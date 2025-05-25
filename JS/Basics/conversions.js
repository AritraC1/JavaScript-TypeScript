// CONVERSIONS

// let score = "33"

// console.log(typeof score)
// console.log(typeof (score))

// let valueInNumber = Number(score)
// console.log(valueInNumber); // NaN - Not a number

// console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "abc" => true

// let num = 33
// let stringNum = String(num)
// console.log(stringNum);
// console.log(typeof stringNum);

// Why string to number conversion is confusing?

let val = 3
let negValue = -val
console.log(negValue);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

// Note: 
// If string first then the rest is treated as a string -> console.log("1" + 2 + 2); // 122
// If number is first and string is last then, first trated as number then string -> console.log(1 + 2 + "2"); // 32

// Tricky Conversion (Avoid this)
// console.log(+true);
// console.log(+"");

// let a,b,c
// a = b = c = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
