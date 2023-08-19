/**
 * function takes a string, and returns an array containging all of the leading substrings 
 * from shortest to longest.
 * 
 * input: string
 * return: array
 * 
 * - empty string returns empty array
 * 
 * D: array
 * 
 * A:
 * create an array of length equal to strings length
 * map over the array, and for each element:
 * replace it with the substring formed from the first letter
 *  to the letter at that index
 * return the array
 * 
 * 
 */

// const leadingSubstrings = function (string) {
//   let subStrings = string.split('');
//   return subStrings.map((_, i) => {
//     return string.slice(0, i + 1);
//   });
// };

const leadingSubstrings = function (string) {
  let subStrings = [];
  
  for (let i = 0; i < string.length; i += 1) {
    subStrings.push(string.slice(0, i + 1));
  }

  return subStrings;
};

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]