const user = {
    userName: "Tony",
    price: "199",

    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`); // this - current context
    }
}

// user.welcomeMessage();
// user.userName = "Sam";
// user.welcomeMessage();

// console.log(this)

// function test() {
//     const username = "Stark";
//     console.log(this.username); // undefined
//     console.log(this);
// }

// test()



// +-----------------+ ARROW FUNCTION +-----------------+

// const fun = () => {
//     const username = "Stark";
//     console.log(this.username); // undefined
//     console.log(this);
// }

// fun()

// Addn of 2 numbers
const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(5,6));


// Implicite Return

const addTwoNum = (num1, num2) =>  num1 + num2; // can also be written as: const addTwoNum = (num1, num2) =>  (num1 + num2)
console.log(addTwoNum(5,6));

// when {} are used we have to write return statement, when there is implicite return, no return statement is reqd.

const addNum = (num1, num2) =>  ({username: "Tony"});
console.log(addNum(5,6));