// Check if the array is sorted

let arr1 = [1, 2, 1, 3, 3, 4, 2, 5]; // Not sorted
let arr2 = [1, 1, 1, 2, 2, 3, 3, 4, 5, 5]; // Sorted
let arr3 = [0];
let arr4 = [];

// Function to check if array is sorted in ascending order
function isSorted(arr) {
  if (arr.length <= 1) return true;

  for (let i = 1; i < arr.length; i++) {
    // Check if the previous element is greater than the current one
    if (arr[i - 1] > arr[i]) {
      return false; // Not sorted
    }
  }
  return true; // Sorted
}

console.log(isSorted(arr1));
console.log(isSorted(arr2));
console.log(isSorted(arr3));
console.log(isSorted(arr4));