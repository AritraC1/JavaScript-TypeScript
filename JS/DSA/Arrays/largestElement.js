// To find the largest element in an array

let arr = [3, 2, 1, 5, 2];

// Brute Force - Sorting

// No Better solution

// Optimal Solution
let largest = arr[0];

for (let i = 0; i<arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i]
    }
}

console.log(`Largest element is: ${largest}`)

