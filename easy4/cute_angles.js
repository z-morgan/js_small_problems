/*
function takes a floating point number, and returns a string converting the number to
degrees, minutes, and seconds.

input: number
return: string

- 60 minuntes in a degree
- 60 seconds in a minute
- degree symbol is ASCII 248

D: variables and numbers

A:
get the number values for deg, min, and sec:
  degrees - round the input num down
  minutes - remainder of dividing num by 1, times 60
    - round down to int
  seconds - remainder of dividing minutes by 1, times 60
    - round down to int

  build the result string:
  convert degrees to string
  append the degree symbol
  convert minutes to string
  if minutes length is 1, prepend '0'
  append minutes to result with a "
  convert seconds to string
  if seconds length is 1, prepend '0'
  append seconds to result with a '
  return result



*/

function dms(angle) {
  angle = validateAngle(angle);

  let degrees = String(Math.floor(angle));
  let minutes = (angle % 1) * 60;
  let seconds = String(Math.floor((minutes % 1) * 60));
  minutes = String(Math.floor(minutes));

  let result = degrees + '\xB0';
  
  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }

  if (seconds.length === 1) {
    seconds = '0' + seconds;
  }

  result += minutes + '"' + seconds + "'";
  return result;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"


// FE
function validateAngle(angle) {
  while (angle > 360) {
    angle -= 360;
  }

  while (angle < 0) {
    angle += 360;
  }

  return angle;
}
console.log('------')
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"