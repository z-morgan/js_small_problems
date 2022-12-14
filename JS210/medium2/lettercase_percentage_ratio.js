'use strict';

/*
input: string of length 1 or more

return: object with 3 properties:   -- what type are the values of the properties??? String
  1 - percentage of characters in input which are uppercase
      - must be letter char
  2 - percentage of characters in input which are lowercase
      - must be letter char
  3 - percentage of characters in input which are non-alphabetic
      - includes all other chars

reqs:
 - percentages are recorded with a precision of 2
 - special chars which are escaped by a `\` are handled as one char (ex. `\n`)
 - don't worry about non-stirng inputs, no inputs, or more than 1 input

Q's:
 - input always string? yes
 - how long can it be? very long
 - will the string include special chars like `\n`?
  yes, - how should these be handled?
    handle as one char

D: object

A:
get the length of the input string

use a regex to create three arrays of chars:
 - lowercase letters
 - uppercase letters
 - non-letters
get the lengths of these arrays

build the object properties by len * 100 / total len

return that object

*/

function letterPercentages(text) {
  let totalLen = text.length;

  let lowerLen = (text.match(/[a-z]/g)   || []).length;
  let upperLen = (text.match(/[A-Z]/g)   || []).length;
  let otherLen = (text.match(/[^a-z]/ig) || []).length;

  return {
    lowercase: (lowerLen * 100 / totalLen).toFixed(2),
    uppercase: (upperLen * 100 / totalLen).toFixed(2),
    neither:   (otherLen * 100 / totalLen).toFixed(2),
  };
}

// tests

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('12\n 3'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }