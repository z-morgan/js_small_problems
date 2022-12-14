'use strict';

/*
function takes two numbers, a and b, and rotates the last `b` digits of a by moving
the left-most digit to the end.

input: two numbers - refered to as a and b
return: a, with the last `b` digits rotated;

reqs:
- rotate means to move the first digit to the end and shift the other digits over to fill its place
- if the result has a leading zero, omit it.
- if a is zero, return 0

Q's:
- can b ever be greater than the number of digits in a?
  - yes, treat b as equal to the number of digits in a
- can b ever by 0 or less?
  - yes, treat b as 0, and don't rotate a
- can a or b ever be non-integers?
  - no
- can a or b ever by non-numbers?
  - yes, if this happens, return null
- if too few return null
- if too many, ignore extras
- can a be negative? 
  - yes, ignore the `-` when rotating.


D: array of string digits


A:
if a or b are not Numbers, return null
if b < 1, return a

initiate a variable for tracking negative
if a is < 0, change to positive, and set negative to true

convert a to string
if b > aString.length, set b to aString.length
get the substring formed by the last b characters
remove the first element of substring, and add to end
concat the first (b - aString.length) chars in a with rotated substring b

While the first char is '0':
  remove the first char

if negative is true, prepend string with '-'
return string converted to number
*/

function removeLeadingZeros(digits) {
  while (digits[0] === '0') {
    digits = digits.slice(1);
  }
  return digits;
}

function rotateLastDigits(wholeString, nDigits) {
  let rotString = wholeString.slice(-nDigits);
  rotString = rotString.slice(1) + rotString[0];
  
  let rotWholeString = wholeString.slice(0, wholeString.length - nDigits) + rotString;

  return removeLeadingZeros(rotWholeString);
}

function rotateRightmostDigits(Num, nDigits) {
  if (typeof Num !== 'number' || typeof nDigits !== 'number') return null;
  if (nDigits < 1) return Num;

  let isNeg = false;
  if (Num < 0) {
    isNeg = true;
    Num = Math.abs(Num);
  }

  let wholeString = String(Num);
  if (nDigits > wholeString.length) {
    nDigits = wholeString.length;
  }

  let rotatedString = rotateLastDigits(wholeString, nDigits);
  
  if (isNeg) {
    rotatedString = '-' + rotatedString;
  }

  return Number(rotatedString);
}

//tests

console.log(rotateRightmostDigits(735291, 1) ===  735291);
console.log(rotateRightmostDigits(735291, 2) ===  735219);
console.log(rotateRightmostDigits(735291, 3) ===  735912);
console.log(rotateRightmostDigits(735291, 4) ===  732915);
console.log(rotateRightmostDigits(735291, 5) ===  752913);
console.log(rotateRightmostDigits(735291, 6) ===  352917);

console.log(rotateRightmostDigits(735291, 7) ===  352917);
console.log(rotateRightmostDigits(23, 0) ===      23);
console.log(rotateRightmostDigits(23, -1) ===     23);

console.log(rotateRightmostDigits(203, 3) ===     32);
console.log(rotateRightmostDigits('1', 3) ===     null);
console.log(rotateRightmostDigits(3, '1') ===     null);
console.log(rotateRightmostDigits(3) ===          null);
console.log(rotateRightmostDigits(23, 1, 23) ===  23);
console.log(rotateRightmostDigits(-23, 1) ===     -23);
console.log(rotateRightmostDigits(-203, 3) ===    -32);
