'use strict';

/**
 * function takes a string, and returns booleanindicating whether all alphabetic chars in string
 * are uppercase. 
 * 
 * input: string
 * return: boolean
 * 
 * - if any lowercase chars, return false
 * - else return true
 * - ignore non-letters
 * 
 * D: regex
 * 
 * A:
 */

// const isUppercase = function (string) {
//   return !(/[a-z]/.test(string));
// };

const isUppercase = function (string) {
  return string === string.toUpperCase();
};

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true