'use-strict';

/**
 * function takes a number, and returns it with its digits reversed
 * 
 * - if there are leading zeros in the result, they get dropped.
 * 
 * D: array of digit strings
 * 
 * A:
 * convert the input number to a string, and split the string into digits
 * reverse the array
 * join the array back to a string, then coerce to a number
 * return the number
 */

const reverseNumber = function reverseNumber(forwardNum) {
  let revDigitsArr = String(forwardNum).split('').reverse();
  return parseInt(revDigitsArr.join(''), 0);
};

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1