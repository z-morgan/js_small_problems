'use strict';

/**
 * write a function which takes one array as an argument, and returns the
 * average of the numbers in the array, rounded down to the nearest
 * integer. All array elements are positive integers, and the
 * array will never be empty.
 * 
 * input: array
 * return: number (int)
 * 
 * D: the input array
 * 
 * A: 
 * iterate over the elements in the array, adding each element to a total
 * divide the total by the length of the array
 * round down to the nearest integer
 * return the result
 */

const average = function average(numsArr) {
  let total = numsArr.reduce((sum, num) => sum + num);
  let average = Math.floor(total / numsArr.length);
  return average;
};

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40