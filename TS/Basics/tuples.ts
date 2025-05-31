// TUPLES
// A tuple is a typed array with a pre-defined length and types for each index.

const user: (string | number)[] = ["mango", 1] // or [1, "mango"]
let myTuple: [string, number, boolean] = ["mango", 1, false] // fixed order : 1. string, 2. number, 3. boolean
// myTuple = [true, "orange", 34] // cannot be like this

let rgb: [number, number, number] = [255, 165, 0]

type User = [number, string]
const newUser: User = [122, "example@gmail.com"]

// newUser[1] = "eg.com"
// newUser.push(true) // shows error




export{}