// Remove duplicates in-place from Sorted Array

let arr2 = [1, 1, 1, 2, 2, 3, 3, 4, 5, 5];
let arr3 = [0];
let arr4 = [];

function removeDuplicates(arr) {
  // Edge Case
  if (arr.length <= 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] == arr[i]) {
      arr.splice(i, 1); // Remove element at index i
      i--; // Decrement i to recheck the new element at index i
    }
  }

  return arr;
}

console.log(removeDuplicates(arr2))
console.log(removeDuplicates(arr3))
console.log(removeDuplicates(arr4))