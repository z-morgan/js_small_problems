'use strict';

/**
 * function takes a string, and returns the string with each word
 * capitalized, and remaining chars downcased.
 * 
 * input/return: string
 * 
 * D: array of words
 * 
 * A: 
 * split the string into an array of words
 *  (splitting on substrings of whitespace chars)
 *  transform each element of the array by upcasing the 
 *  first letter and downcasing the remaining letters
 * join the array back into a string and return.
 * 
 * 
 * to handle consecutive spaces and still return the same number of chars:
 * use regex to match words, and use a capture group to replace the first letter w/ uppercase
 * use regex to match words, and use a captur group to replace remaining chars w/ lowercase
 */

// const wordCap = function (sentence) {
//   let words = sentence.split(/\s+/);
//   words = words.map(word => {
//     return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
//   });
//   return words.join(' ');
// };


const wordCap = function (sentence) {
  return sentence.replace(/(\S)(\w*)/g, (_, cap1, cap2) => {
    return cap1.toUpperCase() + cap2.toLowerCase();
  });
};

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

console.log(wordCap('four score and   seven  '));       // "Four Score And Seven"
