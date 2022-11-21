/*
write a function which takes two arrays as arguments, and returns an array where 
each element is the product of the elements at that index in the input arrays

- the input arrays always have the same length
- the elements in those arrays will always be numbers

D: array

A:
initialize an empty products array
iterate through the indices in the first array, and for each:
  multiply the elements at that index from both arrays
  push the result onto the products array
return the products array

*/

// const multiplyList = function (arr1, arr2) {
//   const products = [];
//   for (let i = 0; i < arr1.length; i++) {
//     products.push(arr1[i] * arr2[i]);
//   }
//   return products;
// }

// const multiplyList = function (arr1, arr2) {
//   return arr1.map((num, idx) => num * arr2[idx]);
// }


// takes any number of array arguments
const multiplyList = function (...arrays) {
  const products = [];
  for (let i = 0; i < arrays[0].length; i++) {
    products[i] = 1;
    arrays.forEach(subArr => products[i] *= subArr[i]);
  }
  return products;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]