// Global and local scope

// Scope - {}
// When '{}' is used with function or if/else then it is called a scope
// When '{}' is used with object then it is called Object Declaration

// Block Scope
if (true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); // Error
// console.log(b); // Error
console.log(c); // 30

// Nested Scope

// CLOSURE
// A closure is a function that has access to the parent scope, after the parent function has closed.

function one() {
    const username = "Peter";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

one();

// ++++++++++++++++++++++++

// HOISTING
// the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code

addOne(5)
function addOne(num){
    return num + 1;
}

console.log(addOne(5));

addTwo(5);
const addTwo = function(num){
    return num + 2;
}