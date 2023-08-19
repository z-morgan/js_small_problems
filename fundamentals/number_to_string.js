/* function takes a positive number, and returns a string representation of that number
input: number
return: string

- cannot use any type coersion

D:

A:
4321 / 1000 = 4
321 / 100 = 3


set a variable mag to 1
if input num < mag
  return 0

loop until mag > input num:
  mag *= 10

divide mag by 10

create a new variable `digits` pointing to an emtpy array

loop until num = 0:
  divide num by mag
  add that value to the digits array
  re-assign num to the remainder of dividing num by mag
  divide mag by 10

transform the elements of digits to their string counterparts
join the digits array to a string and return it

10^3 1000

*/

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function integerToString(num) {
  if (num === 0) return '0';

  let mag = 1;
  while (mag < num) {
    mag *= 10;
  }
  mag /= 10;

  let digits = [];
  while (num > 0 || mag >= 1) {
    digits.push(Math.floor(num / mag));
    num = num % mag;
    mag /= 10;
  }

  return digits.map(ele => DIGITS[ele]).join('');
}

// console.log(integerToString(5000));      // "5000"
// console.log(integerToString(0));         // "0"
// console.log(integerToString(4321));      // "4321"


// new function can also take negative numbers

function signedIntegerToString(num) {
  if (num === 0) return '0';
  return num < 0 ? `-${integerToString(Math.abs(num))}` : `+${integerToString(num)}`;
}

console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(0));         // "0"