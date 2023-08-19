/*
function takes a string, and returns a string where all consecutive duplicate characters 
in the input string are replaced with a single character.

input: string
return: string

- consecutive duplicate means that a given character is immediately followed by another 
    character
- single characters that are not adjacently duplicated are left alone.
- empty string returns empty string
- function's activity is character agnostic

D: new string
A:
create a new string variable set to empty string
iterate through the input string's characters and for each:
  if the char is equal to the last character in the result string
    continue to the next char
  else
    add char to result string
return result string

*/

// const crunch = str => {
//   let result = '';
//   for (let char of str) {
//     if (char !== result[result.length - 1]) {
//       result += char;
//     }
//   }
//   return result;
// };

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""


/*
Solution with regex:
A:
could use a regex to detect duplicate chars...

iterate over the indexes from 0 to string.length - 1
  get a 2 char string from char at index and next index
  if the regex says that the chars are not the same:
    add the first char to the string
return the string

*/

// function crunch(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     let pair = str[i] + str[i + 1];

//     if (!/(.)\1/.test(pair)) {
//       result += str[i];
//     }
//   }
//   return result;
// }

function crunch(str) {
  return str.replace(/(.)\1+/g, '$1');
}

