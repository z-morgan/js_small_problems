/**
 * write a function which takes an integer, and returns an array containing all
 * of the numbers from 1 up to and including the input integer.
 * 
 * input: number
 * return: array
 * 
 * - input num is always positive integer (non-zero)
 * - the number of elements is the input num
 * - the first element is one
 * - the last element is num
 * 
 * D: array
 * 
 * A:
 * initialize result array
 * iterate from 1 up to (including) input num, and for each:
 *  push num onto result array
 * 
 * return result array
 * 
 */

const sequence = function sequence(max) {
  const range = [];

  for (let num = 1; num <= max; num += 1) {
    range.push(num);
  }

  return range;
};

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

