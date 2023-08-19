'use strict';

/**
 * function takes a string, and returns the string value where every other 
 * alphabetic character is capitalized.
 * 
 * - 'every other' ignores non-alphabetic characters.
 * 
 * A:
 * convert string into array of chars
 * create capitalizeNext variable set to True
 * transform the array:
 *  if char is letter
  *  if bool is true, 
  *    set bool to false
  *    return capped char
  *  if bool is false
  *    set bool to true
  *    return lowercased char
  * else
  *   return char
  * join the array back to string and return it
 */

const staggeredCase = function (string) {
  let chars = string.split('');
  let capitalizeNext = true;

  chars = chars.map(char => {
    if (/[a-z]/i.test(char)) {
      if (capitalizeNext) {
        capitalizeNext = false;
        return char.toUpperCase();
      } else {
        capitalizeNext = true;
        return char.toLowerCase();
      }
    }

    return char;
  });

  return chars.join('');
};

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"