/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

---
plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
---

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

For a quick lookup of a ciphertext per character, you may consult this tabula recta. Each row of the table corresponds to a Caesar Cipher encryption using the columns' character letter as a shift value.



P:
function takes two strings, a text and a keyword, and returns the encoded text using 
the vigenere cipher method.

input: text and keyword
  - text can be empty string, and can go up to ~100 chars
  - text can contain non-letter chars (which will be unchanged in return)
  - keyword only contains letter chars (of any case, but treated insensitively)
  - keyword is minimum 1 char, maximum 10 chars
  - inputs are always Strings
  - there will always be 2 arguments

return: encoded text string
  - if text is empty string, return empty string

rules:
  - iterate through the text and key simultaneously
    (the current key char can be found by dividing the current text index
      by the length of the key. The remainder is the current index in the key)
    - if reach the end of key, start over from beginning of key
    - for each character:
      -if text char is a letter:
        - treat the index in the alphabet of the key character as offset
        - apply ceaser cipher behavior to current text char
  - ignore the case of keyword
  - preserve case of text chars


q's:
- what is the minimum length of the text?
- will the keyword included non-letter chars? 
- what is the minimum and maximum length of the keyword?
- will the inputs ever be non-String values?
- how many inputs possible? 

D: an array of characers

A:
for reference, array of alphabet chars (downcase)

split text into array of chars
set textIndex to -1
transform text array, for each char/index:
  if char is non-alphabetic, use same char
  else:
    increment textIndex by 1
    use encoded char (char, index, keyword)
join array of chars and return it

get encoded char: (text char, index, keyword)
  track char's case
  downcase char
  determine offset (index, keyword)
  use get new char (char, offset)
  restore new char's case
  return new char

determine offset (index, keyword)
  key index is remainder of index / keyword's length
  get char at that key index in keyword
  downcase char
  return index of char in alphabet

get new char from offset (char, offset)
  find index of char in alphabet
  add offset to index
  ensure index is 0 <= x <= 25
  return char at index

*/

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function computeOffset(textIndex, keyword) {
  let keyIndex = textIndex % keyword.length;
  let char = keyword[keyIndex].toLowerCase();
  return ALPHABET.indexOf(char);
}

function caesarEncode(char, offset) {
  let index = ALPHABET.indexOf(char);
  index += offset;
  if (index > 25) {
    index -= 26;
  }
  return ALPHABET[index];
}

function encode(textChar, textIndex, keyword) {
  let isUpperCase = /[A-Z]/.test(textChar);
  textChar = textChar.toLowerCase();
  let offset = computeOffset(textIndex, keyword);
  let newChar = caesarEncode(textChar, offset);
  if (isUpperCase) {
    newChar = newChar.toUpperCase();
  }
  return newChar;
}

function vigenereEncode(text, keyword) {
  let textIndex = -1;
  return text.split('').map((textChar) => {
    if (/[^a-z]/i.test(textChar)) {
      return textChar;
    } else {
      textIndex += 1;
      return encode(textChar, textIndex, keyword);
    }
  }).join('');
}


// tests
console.log(vigenereEncode("Pineapples don't go on pizzas!", "meat")); 
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenereEncode('', 'a'));
// ''

console.log(vigenereEncode('hello', 'b'));
// 'ifmmp'

console.log(vigenereEncode('hello' , 'B'));
// 'ifmmp'

console.log(vigenereEncode('h8llo', 'b'));
// 'i8mmp'