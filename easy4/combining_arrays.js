/*
function takes two arrays, and returns a new array by contatenating the two and 
ommitting duplicate values.

- omitting duplicates means that if both arrays contain the same value, that
    value only appears once in the output array
- assume the input arrays have unique values

D: array

A:
create a new array which is a shallow copy of the first input array
iterate through the second array, and for each element:
  if that element does not already exist in the new array, 
    add it
  otherwise, 
    continue to the next element
return the new array

*/

// function union(arr1, arr2) {
//   const combinedArr = arr1.slice();
//   for (let i = 0; i < arr2.length; i++) {
//     if (!combinedArr.includes(arr2[i])) {
//       combinedArr.push(arr2[i]);
//     }
//   }
//   return combinedArr;
// }

function union(...args) {
  const combinedArr = [];

  args.forEach(arr => {
    for (let i = 0; i < arr.length; i++) {
      if (!combinedArr.includes(arr[i])) {
        combinedArr.push(arr[i]);
      }
    }
  })

  return combinedArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]