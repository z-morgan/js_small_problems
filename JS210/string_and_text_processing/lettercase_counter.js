'use strict';

/**
 * function takes a string, and returns a 3-property object containing the following
 * data:
 * - number of lowercase chars
 * - number of uppercase chars
 * - number of non-alphabetic chars
 * 
 * input: string
 * return object
 * 
 * D: object
 * 
 * A:
 * create an object with the desired properties and values of 0
 * iterate through the string chars, and for each:
 *  if char is uppercase letter
 *    increment uppercase prop
 *  if char is lowercase
 *    increment lowercase prop
 *  if char is non-alphabetical
 *    increment neither
 * return object
 */

const letterCaseCount = function (string) {
  const caseTally = { lowercase: 0, uppercase: 0, neither: 0 };
  
  for (let char of string) {
    if (/[a-z]/.test(char)) {
      caseTally.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      caseTally.uppercase += 1;
    } else {
      caseTally.neither += 1;
    }
  }

  return caseTally;
};

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }