/*
write a function which takes any year greater than 0, and returns a boolean indicating if 
it is a leap year or not. 

input: integer
return: boolean

A leap year is:
- evenly divisable by 4, and not by 100
- evenly divisable by 400

D:
A:
if divisible by 4, and not by 100
  return true
if divisable by 400
  return true
else return false


if divisable by 4
  if divisable by 100
    if divisable by 400
      true
    else 
      false
  else
    true
else
false

*/

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

// function isLeapYear(year) {
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   } else if (year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true