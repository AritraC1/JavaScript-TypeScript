// UNION (|)

let score: number|string = 33
score = "55"

type User = {
    userName: string,
    isActive: boolean
}

type Admin = {
    name: string,
    id: number;
}

let account: User | Admin = {userName: "Spidey", isActive: true}
account = {name: "Peter", id: 342} 

// function getDBId(id: number | string){
//     // Making some api calls
//     console.log(`DB Id: ${id}`);
// }

getDBId(3);
getDBId("67");

function getDBId(id: number | string){

    if (typeof id === "string") {
        id = id.toLowerCase();
    }

    else if (typeof id === "number") {
        id = id+2;
    }

    // Making some api calls
    console.log(`DB Id: ${id}`);
}

// Array
const data: (number | string)[] = [1, 2, 3, 4, "5"]; // Either be all numbers or all strings

// Literal Assignment
const pi:3.14 = 3.14 // cannot be assigned to any other number

let seatAllotment: "aisle" | "middle " | "window"
seatAllotment = "aisle"
// seatAllotment= "crew"