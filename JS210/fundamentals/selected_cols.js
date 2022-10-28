/*
function takes a nested array, and an array with indices as elements. It returns a
new nested array with the same length as the indices input array, where each sub-array
holds the values from the nested array's sub-arrays at each index specified in the indices array

input: nested array, and array
return: nested array

- the length of the returned array is the same as the length of the indices array
- each sub-array in the returned array represents an index from the indices array
- each input index specifies an index in every sub-array from the input array.

A:
initialize an empty result array
for every element `i` in the indices array:
  initialize an empty column array
  iterate through the sub-arrays in the input array, and for each:
    push the element at `i` onto the column array
  push the column array onto the result array

return the result array

*/

// function getSelectedColumns(numbers, cols) {
//   var result = [];

//   for (var i = 0, collength = cols.length; i < collength; i += 1) {
//     for (var j = 0, length = numbers.length; j < length; j += 1) {
//       if (!result[i]) {
//         result[i] = [];
//       }

//       result[i][j] = numbers[j][cols[i]];
//     }
//   }

//   return result;
// }

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// // `array1` in row/column format
// // [[1, 2, 3],
// //  [4, 5, 6],
// //  [7, 8, 9]]


/*
below is ls's solution. Here's their algorithm:

initialize a result array
iterate through the indexes in numbers and for each index:
  iterate through the indexes in cols, and for each index:
    if no element exists in result at the current cols index
      add an empty array at current cols index
    get the sub-array at the current numbers index
    get the element in that sub-array at the index specifed by the element in cols at the current cols index
    add that value to result at the current numbers index in the sub-array at the current cols index




*/


function getSelectedColumns(numbers, cols) {
  var result = [];

  for (let i = 0, length = numbers.length; i < length; i += 1) {
    for (let j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]