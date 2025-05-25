// Prototype

// In JavaScript, prototypes are a fundamental concept related to inheritance. 
// They allow objects to inherit properties and methods from other objects. 
// Every Java JavaScript object has a property called prototype, which links to another object, allowing shared properties or methods to be used by all instances of that object.

// let myName = "tony     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.tony = function(){
    console.log(`tony is present in all objects`);
}

Array.prototype.heytony = function(){
    console.log(`tony says hello`);
}

// heroPower.tony()
// myHeros.tony()
// myHeros.heytony()
// heroPower.heytony()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"tony".trueLength()
"iceTea".trueLength()
