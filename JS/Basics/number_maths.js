// NUMBERS & MATHS

// +-----------------+ NUMBERS +-----------------+

const score = 123.8966;
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
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// +-----------------+ MATHS +-----------------+

console.log(Math); // Math libary is with JS by default

console.log(Math.abs(-4)); // always negative to positive but vice-versa not possible
console.log(Math.round(4.35)); // Round-off
console.log(Math.ceil(4.2)); // ceil always chooses the top value
console.log(Math.floor(4.9)); // floor always chooses the bottom value

console.log(Math.sqrt(25));

console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random()); // range: 0 to 1 by default

console.log(Math.floor(Math.random()*10) + 1);

// MIN MAX Formula

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
