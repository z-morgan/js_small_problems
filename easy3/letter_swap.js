/*
function takes a sentence, and and returns a string containing the sentence, but the first and last letters of each word 
are swapped. 

input/return: string

- a word is a substring delimited by spaces
- the input will always contain at least one word
- string only has words and single spaces. 
- no leading or trailing spaces

D: array of words

A:
split the string into an array where each element is one word
transform each element of the array as follows:
  if the word has more than one character:
    split the word into an array of chars
    re-assign the first and last elements to each other
  else, leave the word as-is
join the array of words back into a sentence and return it

*/

function swap(sentence) {
  return sentence.split(' ').map(word => {
    if (word.length > 1) {
      return word[word.length - 1] + word.slice(1, -1) + word[0];
    } else {
      return word;
    }
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"