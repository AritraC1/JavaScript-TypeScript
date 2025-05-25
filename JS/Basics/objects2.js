// Both are same
// const tinderUser = new Object(); // Singleton Object
// console.log(tinderUser);

// const bumbleUser = {};
// console.log(bumbleUser);

const tinderUser = {};
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userName: {
            firstName: "Tony",
            lastName: "Stark"
        }
    }
}

// console.log(regularUser.fullname?.userName.firstName); // '?' checks if the value is empty or not
// console.log(regularUser.fullname.userName.lastName);

// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "a", 4: "b"};

// const obj = {obj1, obj2};
// const obj = Object.assign({}, obj1, obj2);
// const obj = {...obj1, ...obj2} // '...' spread operator
// console.log(obj);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// checks if the property is available (Answers in boolean)
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// +-----------------+ DESTUCTURING OF OBJECTS +-----------------+

const course = {
    courseName: "JS Master Class",
    price: 399,
    courseTeacher: "Hitesh",
}

const {courseTeacher: instructor} = course;
console.log(instructor);


// React Ref
// const navbar = ({company}) => {

// }

// navbar(company = "Avengers")