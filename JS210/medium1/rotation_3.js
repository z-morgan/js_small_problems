'use strict';

/*
write a function which takes an integer and returns the maximum rotation of that integer

input: positive integer w/ 1 or more digits
return: rotated integer

reqs:
- maximum rotation means:
  if the number of digits is n, rotate n - 1 times, but each time
  ignore an additional leading digit when rotating.
    (for 1st rotation, fix 0 digits,
     for 2nd rotation, fix first 1 digits,
     for 3rd rotation, fix first 2 digits,
     Thus, the number of digits to fix is k - 1, where k is the 1-based iteration count)
- rotation means, take the first digit, and move it to the end, shifting over the ohter
      digits to take its place
- if the maximum rotated number has leading zeros, drop them



Q's:
will the number ever be negative? no
will the number always be an integer? yes
what is the maximum size of the number? big, but shouldn't matter
will the input ever be a special number like NaN? no
will the input ever be a non-Number type? no

D: string of digits

A:
convert number to string
get number of rotations = string length - 1
set the number of leading fixed digits 0

loop rotation number times:
  helper func(string, leading fixed digits)
  split the string into fixed portion and rotate portion
    the fixed portion is the leading fixed digits chars
    the rotation portion is the rest
  rotate the rotation portion
      take off the first digit and add it to the end
  join the fixed portion and the rotated portion

  increase the number of leading fixed digits by 1

remove any leading zeros (helpter func)
  while first char is '0' AND string length > 1
  set string to string minus first char

convert string to number and return it
*/

const rotateUnfixedTail = function (string, nFixed) {
  let fixed = string.slice(0, nFixed);
  let rotate = string.slice(nFixed);

  rotate = rotate.slice(1) + rotate[0];
  return fixed + rotate;
};

const removeLeadingZeros = function (string) {
  while (string[0] === '0' && string.length > 1) {
    string = string.slice(1);
  }
  return string;
};

const maxRotation = function (inputNum) {
  let digits = String(inputNum);

  let nFixed = 0;
  let rotationCount = digits.length - 1;
  while (rotationCount > 0) {
    digits = rotateUnfixedTail(digits, nFixed);
    nFixed += 1;
    rotationCount -= 1;
  }

  digits = removeLeadingZeros(digits);

  return Number(digits);
};

// tests
console.log(maxRotation(735291)===      321579);
console.log(maxRotation(3)===           3); //
console.log(maxRotation(35)===          53); //
console.log(maxRotation(105)===         15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146)===  7321609845); //
