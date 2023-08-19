'use strict';

/**
 * write a function which takes a word and a string of text, and returns the number of times the word occurs 
 * in the text. 
 * 
 * input: strings
 * return: number
 * 
 * - words are space-delimited substrings (including non-alphabetic chars)
 * - search in a case-insensitive manner
 * 
 * D:
 * 
 * A:
 * use regex to get an array of all matches
 * return the length of that array
 * 
 * create a count of 0
 * loop through the following while the string matches the pattern:
 *  replace the first matching substring with an empty string
 *  increment count by 1
 * return count
 * 
 * split the string into an array of words
 * iterate through the words, and for each:
 *  if the word is the target word
 *    increment count
 * return count
 */

// const searchWord = function (word, text) {
//   let count = 0;

//   text.toLowerCase().split(' ').forEach(subStr => {
//     if (word === subStr) {
//       count += 1;
//     }
//   });

//   return count;
// };

const searchWord = function (target, text) {
  if (!text) return 0;

  let regex = new RegExp(`\\b${target}\\b`, 'gi');

  let matchArr = text.match(regex);
  return matchArr ? matchArr.length : 0;
};

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));      // 4
console.log(searchWord());      // 0
console.log(searchWord('qui'));      // 0