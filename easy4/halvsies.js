/*
function takes an array, and returns a nested array with two sub-arrays. The first sub-array should 
contain the first half of the value from the input array, and the second sub-array should have the
remaining elements. If the input has an odd number of elements, the middle element goes in the
first sub-array.

input: array
return: nested array

- The input is always an array
- The return value's structure is preserved - if the input is empty, the returned array
    still has two empty sub-arrays.
- If there is an odd number of elements, the middle element, array's length / 2 index
    is placed in the first sub-array

D: sub-arrays

A:
first index of second sub-array is input_array length / 2

if the array's length is odd:
  add 1 to first index of second sub-array

get a shallow copy of the array from index 0 up to and excluding last_half_start
get a shallow copy of the array from index last_half_start to the end
add these to a nested array, and return it. 
*/

function halvsies(whole) {
  let lastHalfStart = whole.length / 2;

  if (whole.length % 2 === 1) {
    lastHalfStart += 1;
  }

  return [whole.slice(0, lastHalfStart), whole.slice(lastHalfStart)];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]