/*
write two functions--afterMidnight and beforeMidnight--which take a string representing the 
time of day in 24 hour format, and return an integer number of minutes before or 
after midnight. 

- use the Date object

A:
after midnight:
  get the milliseconds for a date object at midnight
  get the millis for a date object at input time

  return inputMilli - midnightMilli / 60000

before midnight:
  get the minutes after midnight
  subtract that from the number of minutes in a day

  if the result is 1440, return 0
  otherwise, return that number

*/

const MILLIS_PER_MIN = 60000;
const RAND_DATE = '01/01/2000'
const MIN_PER_DAY = 1440;

function afterMidnight(time_str) {
  let midnightMillis = (new Date(`${RAND_DATE} 00:00`)).getTime();
  let millisAfterMidnight = (new Date(`${RAND_DATE} ${time_str}`)).getTime();
  return (millisAfterMidnight - midnightMillis) / MILLIS_PER_MIN;
}

function beforeMidnight(time_str) {
  let minBeforeMidnight = MIN_PER_DAY - afterMidnight(time_str);
  return minBeforeMidnight === MIN_PER_DAY ? 0 : minBeforeMidnight;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686