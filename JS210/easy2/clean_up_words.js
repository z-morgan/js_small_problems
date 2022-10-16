/*
function takes a string, and returns a new string with all non-alphabetic
chars replaced by spaces. Consecutive replacesments are truncated
to a single space charater.

- spaces count as non-alphabetic chars... thus
  - consecutive spaces are truncated to a single space

D: new string

A:
use JS built-in method with a regex to replace all non-alphabetci chars


*/

let cleanUp = str => str.replace(/[^a-z]+/gi, ' ');

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "