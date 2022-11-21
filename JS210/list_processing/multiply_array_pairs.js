/**
 * function takes two arrays of numbers as arguments, and returns a new array containing the products
 * of all possible combinations of numbers taking one from each input array. The result is sorted ascending.
 * 
 * input: two arrays
 * return: array
 * 
 * - assume neither argument array is empty
 * - make sure to sort the returned array
 * 
 * D:
 * 
 * A:
 * write a helper function which takes two numbers, and returns -1, 0 or 1 based on 
 * comparing them.
 * 
 * create an empty products array
 * use a nested loop to iterate over both arrays, and for each combination of elements:
 * multiply them together, 
 * push them to the products array
 * sort and return the products array
 * 
 * 
 */

// const compareNums = function (num1, num2) {
//   if (num1 < num2) {
//     return -1;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

const multiplyAllPairs = function (arr1, arr2) {
  let products = [];

  arr1.forEach((num1) => {
    arr2.forEach((num2) => {
      products.push(num1 * num2);
    });
  });

  return products.sort((a, b) => a - b);
};


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]