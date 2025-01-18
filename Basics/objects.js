// Symbol creation 
const mySym = Symbol("key1")

// object creation
const user = {
    name: "Tony", // key-value pairs
    "Full name" : "Tony Stark", // this cannot be accessed using '.' operator
    [mySym]: "myKey1", // Square Brackets is used for symbol, without this 'mySym' will be a normal string key
    age: 35,
    location: "New York",
    email: "tonystark@avengers.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(user.age)
// console.log(user["age"])
// console.log(user["Full name"])
// console.log(user[mySym])

// +--------+ . vs [] +--------+

// . Operator
// Used when you know the property name ahead of time and the property name is a valid identifier

// [] Operator
// Used when the property name is stored in a variable, or when the property name is dynamically computed or contains special characters.
// Can also be used for property names that are not valid identifiers (e.g., properties with spaces or numbers at the beginning).

user.email = "tonys@avengers.com"
// Object.freeze(user) // the object is locked and cannot be altered in Object.freeze()
user.email = "tonys1@avengers.com"
console.log(user)

user.greeting = function(){
    console.log("Hello JS User")
}

user.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(user.greeting); // [Function (anonymous)] : Function run nhi hua h, just refernce aaya h
console.log(user.greeting()); 
console.log(user.greetingTwo()); 
