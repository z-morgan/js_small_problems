/*
write a function that takes a string, and returns the UTF-16 value of the string. 

input: string
return: number

- UTF-16 value of a string is the sum of the UTF-16 values of each character
- While UTF-16 is incompatible with ASCII, the encodings are the same for the first 128 chars
- if the input is an empty string, return zero

D: an accumulator variable

A:
iterate over the characters in the string
for each character:
  get the UTF-16 code
  add the code to the accumulator
return the accumulator

*/

function utf16Value(string) {
  let acc = 0;
  for (let index in string) {
    acc += string.charCodeAt(index);
  }
  return acc;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811


//Questions: What is the history of UTF-16?
// How is it different than other encodings
// JS uses it? But not HTTP?
// How does JS handle the string on line 38? ***

/*
In JavaScript, strings are internally made up of sequences of UTF-16 code units.

UTF-16 encodes the first 65536 (2^16) characters in the Unicode set, with each character 
being represented by a single 16-bit code unit. JavaScript stores most of these characters as
their single UTF-16 code units. Since the Unicode set is much larger than UTF-16 can encode,
JavaScript encodes some UTF-16 characters and the Unicode characters outside of the UTF-16 set
using a pair of two 16-bit code units called a "surrogate pair". To avoid confusion between 
characters represented by single 16-bit units and
characters represented by surrogate pairs, JavaScript reserves the UTF-16 values `0xD800` to
`0xDFFF` (written in hexadecimal here) for use in surrogate pairs, and does not encode characters
with only one UTF-16 code unit in that range.

A character which is encoded by JavaScript as a single UTF-16 code unit can be specified as a 
string made up of "\u" followed by exactly 4 hexadecimal digits. Thus, `"\u03A9"` evaluates to the greek letter
`"Ω"`, and `"\u03A9".charCodeAt(0)` evaluates to `937`. Characters encoded with one UTF-16 code unit and 
characters encoded with a surrogate pair can both be specified as a string with the format `"\u{}"` where
the curly braces wrap around a hexadecimal number 1-6 digits long.

*/