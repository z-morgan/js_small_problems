/**
 * function takes a string, and returns an array containing all possible substrings. 
 * 
 * input: string
 * return: array
 * 
 * - returned array should be sorted thus:
 *    - substrings starting at smaller indices first
 *    - substrings with equal starting indices sort by length ascending
 * 
 * - FA use the function from last exercise
 * 
 * - empty string input returns empty array
 * 
 * D: array
 * 
 * A:
 * create an empty subStrings array
 * 
 * iterate from 0 up to string length - 1 and for each starting index:
 *  iterate from starting index + 1 up to string.length
 *  for each pair of indices:
 *  get the substring bounded by those indices
 *  push substring onto array
 * 
 * return array
 */

//  for (let start = 0; start < string.length; start += 1) {
//   for (let end = start + 1; end <= string.length; end += 1) {
//     subStrings.push(string.slice(start, end));
//   }
// }

// function allSubsets(collection, callback) {
//   for (let start = 0; start < collection.length; start += 1) {
//     for (let end = start + 1; end <= collection.length; end += 1) {
//       callback(start, end);
//     }
//   }
// }

// function substrings(string) {
//   let subStrings = [];
//   allSubsets(string, (start, end) => subStrings.push(string.slice(start, end)))
//   return subStrings;
// }

// function substrings(string) {
//   let subStrings = [];

//   for (let start = 0; start < string.length; start += 1) {
//     for (let end = start + 1; end <= string.length; end += 1) {
//       subStrings.push(string.slice(start, end));
//     }
//   }
//   return subStrings;
// }



// Using function from last problem:

// const leadingSubstrings = function (string) {
//   let subStrings = [];
  
//   for (let i = 0; i < string.length; i += 1) {
//     subStrings.push(string.slice(0, i + 1));
//   }

//   return subStrings;
// };


// function substrings(string) {
//   let subStrings = [];

//   for (let start = 0; start < string.length; start += 1) {
//     subStrings.push(leadingSubstrings(string.slice(start)));
//   }

//   return subStrings.flat();
// }


console.log(substrings('abcde'));

 returns
 [ "a", "ab", "abc", "abcd", "abcde",
   "b", "bc", "bcd", "bcde",
   "c", "cd", "cde",
   "d", "de",
   "e" ]