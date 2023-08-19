'use-strict';

/**
 * function takes a string, and returns an array of all substrings which are palindromic.
 * 
 * input: string
 * return: array of strings
 * 
 * - consider all characters when determining palindromes
 * - case-sensitive -- 'A' !== 'a'
 * - single characters are not palindromes
 * - substrings returned in order of occurance of the first character in the input string
 * - if no palindromes, return empty array
 * - duplicate substrings are all returned
 * - empty input string returns empty array
 * 
 * D: array
 * 
 * A:
 * get all substrings (helper) - pass in an iterable collection, return array of sub-collections
 *  iterate from 0 to collection's length - 1 as start:
 *    iterate from start + 1 to collection's length as end:
 *      identify the sub-sequence bounded by those indices
 *      add that sub-sequence to an array, which eventually is returned.
 * 
 * select palindromic substrings which are the same when reversed
 *  - if the substring has a length of 1 or less, skip it
 *  - to check, convert string to array of chars, 
 *  - get a reversed version and join it back to string
 *  - see if the two strings are strictly equal
 * 
 */

const allSubstrings = function (string) {
  let subStringsArr = [];

  for (let start = 0; start < string.length; start += 1) {
    for (let end = start + 1; end <= string.length; end += 1) {
      subStringsArr.push(string.slice(start, end));
    } 
  }

  return subStringsArr;
};

const isPalindrome = function (string) {
  if (string.length <= 1) return false;

  let rev = string.split('')
                  .reverse()
                  .join('');
                  
  return string === rev;
};

const palindromes = function (inputStr) {
  return allSubstrings(inputStr).filter(isPalindrome);
};

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

console.log(palindromes('Ama')); // []
console.log(palindromes('')); // []