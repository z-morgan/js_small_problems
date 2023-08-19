'use strict';

/*
function takes a string, and returns the same string value except with every instance of a number word 
exchanged for the digit

input: string of text contianing words and punctuation
return: string of text where number words are replaced with digits.

reqs:
- number words are: 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  - these are the only number words to consider
- punctuation must be excluded when determining what is a word ('four.' becomes 'four')
- What is a word? 
  - a consecutive string of letters

Q's:
- empty string? yes - return empty string
- will number words every occur without a delimiting space? no
- empty argument? no
- non-string argument? no
- multiple arguments? no
- should I perform any other processing on the string besides the replacement?
- should I match numbers in a case-insensitive way? yes
- should I replace number words that occure within another word?

D: string 
object of number words and digits

A:
iterate through the number words, and for each:
  replace all instances of that word in the string with the cooresponding number.
return the string.
*/

const WORD_TO_DIGIT = {
  zero: '0',
  one:  '1',
  two:  '2',
  three: '3',
  four:  '4',
  five:  '5',
  six:   '6',
  seven: '7',
  eight: '8',
  nine:  '9',
};

// function wordToDigit(text) {
//   Object.keys(WORD_TO_DIGIT).forEach(numWord => {
//     text = text.replaceAll(numWord, WORD_TO_DIGIT[numWord]);
//   });
//   return text;
// }

// function wordToDigit(text) {
//   Object.keys(WORD_TO_DIGIT).forEach(numWord => {
//     text = text.replace(new RegExp('\\b' + numWord + '\\b', 'gi'), WORD_TO_DIGIT[numWord]);
//   });
//   return text;
// }

//FE:
/*
replace each word with:
  if word is a key in obj
    value
  else, word
*/

function replacer(word) {
  if (Object.keys(WORD_TO_DIGIT).includes(word.toLowerCase())) {
    return WORD_TO_DIGIT[word.toLowerCase()];
  } else {
    return word;
  }
}

function wordToDigit(text) {
  return text.replace(/[a-z]+/gi, replacer);
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('Please call me at Five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."

console.log(wordToDigit('')); // ''