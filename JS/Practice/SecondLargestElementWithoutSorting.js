// Second Largest/Smallest Element Without Sorting
let arr = [3, 2, 1, 5, 2, 7, 7];

// Brute/Better Solution Solution - To find the largest and use this largest to find the secondLargest

// Optimal Solution
function secondLargestNumber(arr) {
  largest = arr[0];
  secondLargest = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondlargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(`The second largest number in the given array is ${secondLargestNumber(arr)}`)
