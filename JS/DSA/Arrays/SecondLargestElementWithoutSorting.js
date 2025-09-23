// Second Largest/Smallest Element Without Sorting
let arr = [3, 2, 1, 5, 2, 7, 7];

// Step1: To find the largest
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}

// Step2: Use this largest to find the second largest
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > secondLargest && arr[i] < largest) {
    secondLargest = arr[i];
  }
}

// Step3: Return the second largest
console.log(`Second Largest Value in the array: ${secondLargest}`);