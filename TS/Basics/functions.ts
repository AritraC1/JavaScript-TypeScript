// FUNCTIONS

function addTwo(num: number): number {
    return num + 2;
    // return "hello" // error
}

function getUpper(word: string){
    return word.toUpperCase();
}

function signUpuser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {} // entering the default value

console.log(addTwo(5));
console.log(getUpper("hello"));
signUpuser("Tony", "ironman@avengers.com", false);
loginUser("Peter", "pete@avengers.com")


// function getVal(myVal: number){
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getGreetings = (greet: string): string => {
    return "";
}

const heroes = ["thor", "spiderman", "ironman"]
// const heroes = [1, 2, 3]

heroes.map((hero): string => {
    return `Hero is ${hero}`
})

// void represents the return value of functions which don’t return a value. It’s the inferred type any time a function doesn’t have any return statements, or doesn’t return any explicit value from those return statements
function consoleError(errorMsg: string): void{
    console.log(errorMsg);
}

// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function handleError(errorMsg: string): never{
    throw new Error(errorMsg);
}


export{}