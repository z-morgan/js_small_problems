/*
function takes a number (integer) and returns a string representing the century which that number
falls into as a year. 

input: number
return: string

- years from 1 to 100 comprise the century formed by dividing the last year by 100
    ex. 1st - 1-100
        2nd - 101-200
- the suffix rules are thus:
  - ends in 0, or 4-9, or is 11-13, --> 'th'
  - ends in 1, --> 'st'
  - ends in 2, --> 'nd'
  - ends in 3, --> 'rd'

D: A number, and then a string

A:
loop the following while the input year is not evenly divisable by 100:
  increment the year by 1
divide the year by 100 to get the century number
convert that number to a string
use conditional logic to form a new string by concatonating the proper suffix
return the new string.


*/

function century(year) {
  while (year % 100 !== 0) {  // this is more understandable
    year += 1;
  }
  let century = String(year / 100);

  // let century;              // this is faster
  // if (year % 100 !== 0) {
  //   century = Math.ceil(year / 100);
  // } else {
  //   century = year / 100;
  // }
  // century = String(century);

  if (['11', '12', '13'].includes(century.slice(-2))) {
    century += 'th';
  } else if (century.slice(-1) === '1') {
    century += 'st';
  } else if (century.slice(-1) === '2') {
    century += 'nd';
  } else if (century.slice(-1) === '3') {
    century += 'rd';
  } else {
    century += 'th';
  }

  return century;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"