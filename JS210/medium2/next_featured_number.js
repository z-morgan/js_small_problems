'use strict';

/*
input: integer
  - 0 or greater

return:
 - the next highest featured number
 - featured number means it meets all of the following:
   - is odd
   - can be evenly divided by 7
   - has no duplicate digits
 - any number equal to or greater than 9876543201 returns an error string


reqs:
- if a featured number is passed in, return the next featuredd number



q's:
- can the input be negative? no
- what is the smallest possible input value? 0
- can the input be a special number? no
- can the input have a type other than Number? no
- Will there ever be no input, or more than one input? no

D: a loop, which exits upon finding a featuerd number

A:
if the input number is max or greater, return error string

starting with the input number + 1, 
  loop through the following:
    if the current number isfeatuered, 
      return it
    else
      increment value and continue

isfeatured: (bool)
  if odd && divisable by 7 evenly && uniqueDigits
    return true
  else return false

uniqueDigits: (bool)
  convert number to string
  iterate through string, and for each char
    if char is in storage array, 
      return false
    add char to stroage array
return true, if loop finishes
    

*/

const MAX_FEATURED_NUM = 9876543201;

function uniqueDigits(num) {
  let seenChars = [];

  for (let char of String(num)) {
    if (seenChars.includes(char)) {
      return false;
    } else {
      seenChars.push(char);
    }
  }

  return true;
}

function isMultOf7(num) {
  return num % 7 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function isFeatured(num) {
  return isOdd(num) && isMultOf7(num) && uniqueDigits(num);
}

function featured(inputNum) {
  if (inputNum >= MAX_FEATURED_NUM) return 'There is no possible number that fulfills those requirements.';

  for (let currentNum = inputNum + 1; ; currentNum += 1) {
    if (isFeatured(currentNum)) return currentNum;
  }
}

// test

console.log(featured(0));            // 7
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
console.log(featured(9876543202));   // "There is no possible number that fulfills those requirements."
