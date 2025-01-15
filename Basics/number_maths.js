// NUMBERS & MATHS

// +-----------------+ NUMBERS +-----------------+

const score = 123.8966
console.log(score);
console.log(score.toPrecision(3)); // returns string and the number range is from 1-21 inside the parenthesis

const balance = new Number(100) // Explicitely casted
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // Precision Value - mostly used in e-commerce application

const num = 1000000
console.log(num.toLocaleString()); // By default us standard
console.log(num.toLocaleString('en-IN')); // Indian value

// Max Min Values in JS
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// +-----------------+ MATHS +-----------------+

console.log(Math);

