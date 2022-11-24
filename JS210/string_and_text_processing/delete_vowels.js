'use strict';

/**
 * function takes an array of strings, and returns an array with the same values, except 
 * with the vowels removed.
 * 
 * - vowels: a e i o u (not y)
 * - method is case-insensitive; upper and lower vowels are removed
 * - if all letters are vowels, convert to empty string
 * 
 * D: array
 * 
 * A:
 * perform a transformation operation on each element in the input array
 *  use a regex to replace the string with a string w/ out vowels
 * return the new array
 */

const removeVowels = function (stringsArr) {
  return stringsArr.map((string) => string.replace(/[aeiou]/gi, ''));
};

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]