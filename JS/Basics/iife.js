// Immediately Invoked Function Expressions (IIFE)
// Functions that are executed immediately after they are defined.
// It is a design pattern used to create a new scope, encapsulating variables and preventing them from polluting the global scope.

(function dbConnection() {
    // Named IIFE
    console.log(`DB Connected`);
})();

// ()() -> First parenthesis is function definition and second parenthesis is function execution
// Always use ';' to end the function when using IIFE

(
    // Unnamed IIFE
    (name) => {
        console.log(`DB2 ${name} Connected`);
    }
)('Student')