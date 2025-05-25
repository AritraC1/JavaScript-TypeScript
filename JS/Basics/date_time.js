// DATES & TIME

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(typeof myDate); // Object

console.log();

let myCreatedDate = new Date(2023, 0, 23); // Months in JS start from 0 --> 0-Jan, 1-Feb, 2-Mar, .........
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.getTime());

console.log();

let date1 = new Date("2025-01-25"); 
let date2 = new Date("01-14-2025"); 
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());

console.log();

let myTimeStamp = Date.now(); // used in polls, quizes
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

console.log()

// Other Methods

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());

// Customizing the toLocaleString() format
newDate.toLocaleString('default', {
    weekday: "long",
})
