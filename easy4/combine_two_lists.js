/* 
write a function that takes two arrays, and returns an combined array with the elements 
from the input arrays alternating.

- the even-indexed elements are from the first array.
- the arrays always have equal length

D: array

A:
iterate from index 0 up to the last index in the first array, and for each:
  get the element in array 1 at that index, and push it onto the result array
  do the same for array 2
return the result array


*/

let interleave = function (arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]);
  }
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]