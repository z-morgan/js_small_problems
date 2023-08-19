/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

P:
function takes a string and an integer, and returns a string where all alphabetic chars are replaced by the letter `integer` places ahead of it, wrapping around to the bigginnig if needed.

input: string and integer
  - string can be empty
  - integer can be 0 or negative
    - if negative, go backwards when shifting to the encoded character
    - if integer is greater than 25, get the remainder of dividing it by 26 
        and treat that is the new offset

return: string with letter chars substituted
- case must be preserved for encoded chars
- ignore non-letter chars

Q's:
- will the arguments always be one string and one integer in that order? yes
- integer means alwyas a whole number of the Number type
- can an empty string be passed in? - yes
- what is the minimum value of the integer? can it be negative? -yes


D: array of chars


A:
if aboslute value of offset > 25:
  re-assign offset to remainder of offset / 26

split the input string into an array of chars
transform the elements in that array thus:
  if element non-letter, leave unchanged
  else: encode letter

join the chars into a string and return


encode letter (letter, offset)
  build a reference array containing all letters
  if letter is uppercase (use regex to check), set uppercase to `true`
  downcase the character
  find the index of letter in array
  increment index by offset
    if new index is negative, 
      re-assign it to array.length + index
    if new index is > 25
      re-assign it to new index - 26
    get the letter at index from array 
    if uppercase is `true`
      upcase the letter
    return letter

*/

function encodeLetter(char, offset) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let isUpperCase = /[A-Z]/.test(char);
  char = char.toLowerCase();

  let newIndex = ALPHABET.indexOf(char) + offset;
  if (newIndex < 0) {
    newIndex = ALPHABET.length + newIndex;
  } else if (newIndex > 25) {
    newIndex = newIndex - 26;
  }

  let newChar = ALPHABET[newIndex];
  if (isUpperCase) {
    newChar = newChar.toUpperCase();
  }

  return newChar;
}

function caesarEncrypt(text, offset) {
  if (Math.abs(offset) > 25) {
    offset = (offset % 26);
  }

  let encodedText = text.split('').map(char => {
    if (/[^a-z]/i.test(char)) {
      return char;
    } else {
      return encodeLetter(char, offset);
    }
  });

  return encodedText.join('');
}

// // tests
// console.log(caesarEncrypt('', 1)); // ''
// console.log(caesarEncrypt('A', -1)); // Z


// // // simple shift
// console.log(caesarEncrypt('A', 0));       // "A"
// console.log(caesarEncrypt('A', 3));       // "D"

// // // wrap around
// console.log(caesarEncrypt('y', 5));       // "d"
// console.log(caesarEncrypt('a', 47));      // "v"

// // all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
"Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
"Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"