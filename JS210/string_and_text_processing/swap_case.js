'use strict';

/**
 * function takes a string and returns the string with the cases of 
 * the letters swapped. leave non-letter chars alone.
 * 
 * A:
 * convert string to array of chars
 * transform array:
 *  swap the case, or leave alone if non-alphabetic
 * join and return data structure
 */

const swapCase = function (text) {
  let chars = text.split('');
  let swappedChars = chars.map(char => {
    return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
  });
  return swappedChars.join('');
};

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
