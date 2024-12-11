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

// Closure
function one() {
    const username = "Peter";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    console.log(website);

    two();
}

one();