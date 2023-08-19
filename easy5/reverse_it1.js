'use strict';

/**
 * write a function which takes a string argument, and returns a string with the words
 * reversed.
 * 
 * - words are delimited by spaces
 */

const reverseSentence = function reverseSentence(forward) {
  return forward.split(' ').reverse().join(' ');
};

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"