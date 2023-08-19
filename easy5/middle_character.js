'use strict';

/**
 * function takes a string, and returns a new string containing only the middle
 * char(s). 
 * 
 * - if the input has an odd length, return one character
 * - if the input has even length, return two characters
 * 
 * D:
 * 
 * A:
 * 
 * 
 * 'cat' -> char at i = 1, stop before i =2;
 *          char at ciel(str.length / 2 - 1)
 *          up to floor(str.length / 2 + 1)
 * 
 * 'test' -> chars at i = 1, stop before i = 3
 *           chars at ceil(str.length / 2 - 1)
 *           up to floor(str.length / 2 + 1)
 * 
 * return the substring from i = length/2 - 1 (rounded up) up to and 
 * excluding i = length/2 + 1 (rounded down).
 */

const centerOf = function centerOf(fullStr) {
  let start = Math.ceil((fullStr.length / 2) - 1);
  let end = Math.floor((fullStr.length / 2) + 1);
  return fullStr.slice(start, end);
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('xl'));                 // "x"