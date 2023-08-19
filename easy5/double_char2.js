'use-strict';

/**
 * function takes a string, and returns a new string with the same values
 * except that all consonants are duplicated.
 * 
 * - don't duplicate other characters.
 * 
 * D: new string
 * 
 * A:
 * create an array containing all consonants
 * create an empty result string
 * 
 * iterate over the input string, and for each:
 *  if the char is a consonant, add it twice to the result string
 *  otherwise, add it once to the result string
 * return the result string
 */

const CONSONANTS = [
  'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
  'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w',
  'x', 'y', 'z'
];

const doubleConsonants = function doubleConsonants(inputStr) {
  let doublesStr = '';

  for (let i = 0; i < inputStr.length; i += 1) {
    if (CONSONANTS.includes(inputStr[i].toLowerCase())) {
      doublesStr += inputStr[i].repeat(2);
    } else {
      doublesStr += inputStr[i];
    }
  }

  return doublesStr;
};

console.log(doubleConsonants('String'));         // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));   // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));       // "JJullyy 4tthh"
console.log(doubleConsonants(''));               // ""