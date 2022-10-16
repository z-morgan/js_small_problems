/*
function takes an integer, and returns a string of alternating 1's and 0's with length
"integer". The string starts with "1"

A:
create a new string variable
iterate from 1 up to input integer, and for each:
  if the number is odd, 
    add a "1" to the result string
  if the number is even, 
    add a "0" to the result string
return the result string

*/

const stringy = len => {
  let result = "";
  for (let count = 1; count <= len; count += 1) {
    if (count % 2 === 1) {
      result += "1";
    } else {
      result += "0";
    }
  }
  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"