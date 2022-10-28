/*
function takes an integer representing the number of minutes before (negative) or after (positive) midnight.
returns a string representing the time in 24 hour format.

input: integer
return: string - "xx:xx"

- must use the Date object in the implementation
- if the number of minutes exceeds that in a 24 hour period, reduce the 
    number by a day's worth until it is less than 24 hour's worth of minutes.


A:
create a new date object representing JS time "0"
use `Date.prototype.setMinutes()` to adjust the date according to the number of minutes
use `Date.prototype.getHours()` and `Date.prototype.getMinutes` to get
  the proper numbers and convert them to a properly formatted string.


*/

function timeOfDay(deltaMin) {
  let midnight = new Date('0');
  midnight.setMinutes(deltaMin);
  let hours = String(midnight.getHours());
  let minutes = String(midnight.getMinutes());

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  console.log(`${hours}:${minutes}`);
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"