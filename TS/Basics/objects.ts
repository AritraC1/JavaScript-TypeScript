// Objects

const user = {
    name: "Tony",
    email: "ironman@avengers.com",
    isActive: true
}

// Weird Behavior
// function createUser({name: string, isPaid: boolean}){}
// let newUser = {name: "Peter", isPaid: false, email: "t@t.com"}
// createUser(newUser);

// Better way
function createCourse ():{name: string, price: number}{
    return {name: "Full Stack Web Development", price: 599}
}

// Type Aliases

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User){}

createUser({name: "", email: "", isActive: false})

// READONLY (Scenario Based)
type UserDetails = {
    readonly _id: string; // wont be able to change the value of _id down the road
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number // optional (?)
}

let newUser: UserDetails = {
    _id: "12345",
    name: "Peter",
    email: "parker@avengers.com",
    isActive: true,
}

type cardNumber = {
    cardNumberVal: string
}

type cardDate = {
    cardDateValue: string
}

// Using existing types to define another type
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

newUser.email = "pete@avengers.com";
// newUser._id = "234"; // Cannot assign to '_id' because it is a read-only property.


export {}