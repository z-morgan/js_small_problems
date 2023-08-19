'use strict';

/**
 * takes a string of words, and returns an array where each element consists
 * of a string with a word followed by a space and that word's length.
 * 
 * input: string
 * return: array
 * 
 * - empty string argument or no argument returns empty array
 * - words are strings of one or more chars delimited by a space
 * 
 * D: array of words
 * 
 * A:
 * guard? if argument is falsy, return emtpy array
 * 
 * convert the string to an array of words
 * transform the array thus:
 *   for each word:
 *    get the length of the word
 *    the new element is the word appended with a space and the length
 * 
 */

const wordLengths = function (sentence) {
  if (!sentence) return [];

  return sentence.split(' ').map(word => word + ` ${word.length}`);
};

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []