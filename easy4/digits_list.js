/*
function takes a positive integer, and returns an array where each element is one 
number digit from the input

- note that the elements in the array are of the number data type

A:
coerce the input to a string
split the string into an array of characters
convert each character to a number
return the array
*/

function digitList(num) {
  let digitsArr = String(num).split('');
  return digitsArr.map(digit => Number(digit));
}


console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]