'use strict';

/*
input: an integer representing any year greater than 1752
return: an integer representing the number of Friday the 13ths in that year
 - days which are the 13th day of the month 
 - AND a friday

Q's:
- will the input always be integer? yes
- will there always be an input, and only one? yes

D: date object and a integer tally

A:
set a tally variable to 0

iterate from 0 up to 11 and for each:
  get a date object for the 13th of that month in the input year
  if the date object is a Friday, increment tally

return tally
*/

function fridayThe13ths(year) {
  let unluckyTally = 0;

  for (let mo = 0; mo < 12; mo += 1) {
    let date = new Date(year, mo, 13);
    if (date.getDay() === 5) {
      unluckyTally += 1;
    }
  }

  return unluckyTally;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2