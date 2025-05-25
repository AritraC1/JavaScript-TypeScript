// <---- ARRAYS ---->

// Can hold multiple values under same name

// creating an array
let marks = [91, 62, 88, 94, 57, null, false, "Quiet Good"];

// printing array
console.log(marks);

// Accessing array using index value (starts from 0)
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log(marks[7]);
console.log(marks[8]); // prints undefined as there are 7 indexes and not 8 (0-7)

// Length of array
console.log("Length of array is:", marks.length); 

// changing the values
marks[5] = 75; // replaces the value of index 5
console.log(marks);

// adding values to array
marks[8] = 23;
console.log(marks);
console.log("New Length of array is:", marks.length); 

// Using loop
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}
 
//// ARRAY METHODS

// toString
let m = marks.toString(); // m is now a string
console.log(m);

// Join
let num = [1,2,3,4,5,6];
let c = num.join("_");
console.log(c);

// Pop (last element delete)
let p = num.pop();
console.log(num, p); // p returns the popped element

// Push - Adds a new number in the array and also returns the new length of the array
let r = num.push(7); 
console.log(num,r);

// Shift/Unshift
let t = num.shift(); // removes the first element of the array and returns it
console.log(t, num);

let d = num.unshift(1); // adds an element in the beginning of the array and returns the new array length
console.log(d, num);

// Delete
delete num[0];
console.log(num);

// Concat
let a = [1,2,3,4,5,0];
let b = [0,5,4,3,2,1];

let newArr = a.concat(b); // Joins two arrays/strings
console.log(newArr);

let f = [0,0,0,0,0,0];
let newNewArr = a.concat(b.concat.c);
console.log();

// Sort - Sorts the array
let s = [3,4,1,7,2,8,0];
console.log(s.sort());

// Ascending order
let asc = (a,b) => {
    return a-b;
}

// Descending order
let desc = (a,b) => {
    return b-a;
}

let numbers = [22,11,12,3,0,23,55,56,76,77,87,82,91,223,435,576,112,224,1234,2];

numbers.sort(asc); // Becomes the base of sorting here it is ascending order
console.log(numbers);

numbers.sort(desc); // here it is descending 
console.log(numbers);

// Splice - Returns deleted items and modifies the array
let arr1 = [1,2,3,4,5];
arr1.splice(2,1,23,34); // arr1.splice( position to add, Number of elements to remove, Elements to be added, Elements to be added)
console.log(arr1);

// Slice - Slices out a piece from an array. It creates a new array
let arr2 = [1,2,3,4];

let sliceA = arr2.slice(2);
console.log(sliceA);

let sliceB = arr2.slice(2,3);
console.log(sliceB);

// Reverse
let arr3 = [9,8,7,6,5,4,3,2,1];
console.log(arr3.reverse()); // reverses the array
