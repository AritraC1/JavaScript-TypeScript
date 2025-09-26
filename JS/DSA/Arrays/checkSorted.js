// Check if the array is sorted

let arr1 = [1,2,1,3,3,4,2,5] // Not sorted
let arr2 = [1,1,1,2,2,3,3,4,5,5] // sorted

// Set - unique only and arrangement ascending by default
let mySet = new Set();

for (let i = 0; i<arr1.length; i++) {
    mySet.add(arr1[i]);
}

console.log("My Set: ", mySet)