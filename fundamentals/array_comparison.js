/* 
function takes two arrays, and returns a boolean, indicating whether they contain the same values or not.

input: two arrays
return: boolean

- The array elements do not need to be in the same order. As long as the arrays contain all of the same 
    elements within them, they are considered equal.

- Array elements are compared using strict equality

D: copies of the input arrays

A:
if the arrays have different lengths, return false

get a shallow copy of both arrays
sort the copies, so that they are both sorted ascending
iterate over the indeces, and for each:
  if the elements at that index in both arrays are not strictly equal:
    return false
return true

*/

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  const arr1 = array1.slice().sort();
  const arr2 = array2.slice().sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true