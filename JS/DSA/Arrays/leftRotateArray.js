// Left Rotate Array by K places

let arr = [1, 2, 3, 4, 5];
k = 1;

// Left rotation by 1 place is - [2,3,4,5,1]
function leftRotateArray(arr) {
  // Ensuring that k is within the bounds of the array length
  k = k % arr.length;

  // Slice the array at index k and concatenate the two parts
  return arr.slice(k).concat(arr.slice(0, k));
}

console.log(leftRotateArray(arr, k));
