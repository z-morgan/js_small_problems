// function stringToInteger(str) {
//   return str - 0;
// }

/*
write a string to number function without using any type coersion whatsoever

A:
create an object which holds the matching digits and numbers
create a boolean variable called negative
create an empty nums array
iterate over the string characters and for each:
  if the character is '-'
    turn negative to true
  if the char is '+'
    next char
  else
    get the correct number from the hash table and push it onto the nums array

create an accumulator number set to zero
iterate over the nums array and for each element:
  multiply the accumulator by 10
  add the element to the accumulator

if negative is set to true, set the accum to negative 
return the accumulator
*/

const DIGITS = {
  '0': 0, '1': 1, '2': 2,
  '3': 3, '4': 4, '5': 5,
  '6': 6, '7': 7, '8': 8, '9': 9,
}

function stringToInteger(str) {
  let neg = false;
  let nums = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '-') {
      neg = true;
    } else if (char !== '+') {
      nums.push(DIGITS[char]);
    }
  }

  integer = nums.reduce((acc, num) => {
    return (acc * 10) + num;
  }, 0);

  return neg ? -integer : integer;
}

console.log(stringToInteger('-4321'));      // -4321
console.log(stringToInteger('570'));       // 570

console.log(typeof stringToInteger('4321'));      // 4321
console.log(typeof stringToInteger('570'));       // 570
