'use strict';

/**
 * function takes a string, and returns a new string with the chars in the input
 * string, but each character is doubled.
 * 
 * input: string
 * return: string
 * 
 * - by doubled, mean that each character occurs in duplicate before the next
 *    character appears
 * - double all chars, including whitespace and punctuation
 * - empty string returns empty string.
 * 
 * D: new string and concatenation
 * 
 * A:
 * initialize an empty string as the result string
 * iterate through the charactes in the input string, and for each:
 *  concatenate the result string with 2 of the current char
 * return the result string.
 */

const repeater = function repeater(inputStr) {
  let doubledChars = '';

  for (let char of inputStr) {
    doubledChars += char.repeat(2);
  }

  return doubledChars;
};

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""