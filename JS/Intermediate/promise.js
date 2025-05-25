const promise1 = new Promise(function(resolve, reject){ // 
    // Do ASYNC task
    // DB Calls
    // Crypto tasks
    // network calls

    setTimeout(function(){
        console.log('Aync task is complete');
        resolve();
    }, 1000)
});

// then is connected to resolve
promise1.then(function(){
    console.log("Promise consumed");
});

// Promise 2
new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("Async task 2");
        resolve()
    },2000)
}).then(function(){
    console.log("Async 2 Resolve");
});

// Promise 3
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Tony", email: "tony@avengers.com"});
    }, 3000)
});

promise3.then(function(user){
    console.log(user);
});

// Promise 4
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // or false
        if(!error){
            resolve({username: "Tony", email: "tony@avengers.com", password: "Iamironman"});
        } else {
            reject('Error: Something went wrong')
        }
    }, 4000)
})

promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);  
}).finally(() => console.log("The promise if either resolved or rejected")); // runs anyway

// Promise 5
const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // or false
        if(!error){
            resolve({username: "JavaScript", password: "abc123"});
        } else {
            reject('Error: JS went wrong')
        }
    }, 5000)
})

async function consumePromise5(){
    try {
        const response = await promise5; // promise is an object
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise5();

// Promise 6

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
})
.catch((error) => console.log("E: ", error))