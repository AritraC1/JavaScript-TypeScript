// Stack (Primitive) - Copy of original Values
// Heap (Non-Primitive) - Reference of original Value

let name = "Tony";
let firstName = name;
firstName = "Stark";

console.log(name);
console.log(firstName);

// Objects - UserOne and UserTwo
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne; 

userTwo.email = "user_one@gmail.com";

console.log(userOne.email);
console.log(userTwo .email);


// Heap me original me change ho gaya because dono ka reference same h
// Stack me copy of the original me change hogaya