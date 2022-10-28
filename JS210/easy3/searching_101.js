/*
write a program which requests 6 numbers from the user, and logs a message
indicating whether the 6th number appears in the first 5 numbers.

input: User inputs 6 numbers
logs: message

- take the numbers(as strings)
- return a message listing the first 5 numbers and saying whether the last one fits in.

D: array

A:
load the readline-sync package
loop the following 5 times:
  get an input from the user
  store the input in an array

get one more input from the user, and store it in a variable
see if tha last input is the same as a previous input in the array
if so, 
  log a success message
if not, 
  log a failure message

*/

// const RLS = require('readline-sync');

// const set = [];
// while (set.length < 5) {
//   set.push(RLS.question('Add a value to the set: '));
// }

// const checkValue = RLS.question('Enter a value to search for: ');

// if (set.includes(checkValue)) {
//   console.log(`The number ${checkValue} appears in ${set}.`);
// } else {
//   console.log(`The number ${checkValue} does not appear in ${set}`);
// }



// browser version:

// const set = [];
// while (set.length < 5) {
//   set.push(prompt('Add a value to the set: '));
// }

// const checkValue = prompt('Enter a value to search for: ');

// if (set.includes(checkValue)) {
//   alert(`The number ${checkValue} appears in [${set.join(', ')}].`);
// } else {
//   alert(`The number ${checkValue} does not appear in [${set.join(', ')}]`);
// }



// searches on a condition instead
const set = [];
while (set.length < 5) {
  set.push(prompt('Add a value to the set: '));
}

const condition = prompt('Enter a condition on which to search the set for (e.g. "> 25"): ');

function searchSet(setToSearch, searchCondition) {
  const isExpTrue = value => eval(value + searchCondition);
  return setToSearch.some(isExpTrue);
}

if (searchSet(set, condition)) {
  alert(`A number ${condition} appears in [${set.join(', ')}].`);
} else {
  alert(`A number ${condition} does not appear in [${set.join(', ')}]`);
}

// input "1", "2", "3", "4" and "5"
// then input "> 4"
// reports "A number > 4 appears in [1, 2, 3, 4, 5]."



// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].