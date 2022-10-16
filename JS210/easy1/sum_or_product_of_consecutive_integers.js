// prompt the user to a number greater than 0
// prompt the user for a choice
// create a result variable with a value of 1
// compute the result based on the choice
//   loop from 2 up to input number
//   either add or multiply based on the choice
// log the result

// let max = Number(prompt('Please enter an integer greater than 0: '));
// let operation = Number(prompt('Enter "s" to compute the sum, or "p" to compute the product: '));

// let result = 1;
// for (let num = 2; num <= max; num++) {
//   switch (operation) {
//     case 's':
//       result += num;
//       break;
//     case 'p':
//       result *= num;
//       break;
//   }
// }

// if (operation === 's') {
//   operation = 'sum';
// } else if (operation === 'p') {
//   operation = 'product';
// }

// console.log(`The ${operation} of the integers between 1 and ${max} is ${result}.`);


// FE
// program prompts the user for multiple numbers, delimited by commas.
// program process the string to obtain an array of numbers
// use reduce to either sum or multiply the numbers.

function arrayFromString(string) {
  let arr = string.split(',')
  return arr.map(str => Number(str));
}

let arr = arrayFromString(prompt('Please enter integers delimited by commas: '));
let operation = prompt('Enter "s" to compute the sum, or "p" to compute the product: ');

let result;
switch (operation) {
  case 's':
    result = arr.reduce((acc, num) => acc + num, 0);
    operation = 'sum';
    break;
  case 'p':
    result = arr.reduce((acc, num) => acc * num, 1);
    operation = 'product';
    break;
}

console.log(`The ${operation} of the integers is ${result}.`);