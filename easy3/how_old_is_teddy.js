/* 
program generates a random number between 20 and 200 (inclusive), 
and logs it to the console in a string.

A:
(for rand number)
get a random number between 0 and 1, multiply it by 100
multiply by 180, and divide by 100
add 20

*/

let percentageOfInterval = Math.random() * 100;
let numInInterval = Math.floor(percentageOfInterval * 181 / 100);
let age = numInInterval + 20;

console.log(`Teddy is ${age} years old!`);


// LS's solution for random number: (inclusive of min and max)
Math.floor(Math.random() * (max - min + 1)) + min;

// get the number of possible values (max - min + 1) (the plus 1 is due to it being inclusive) - 181 values
// to choose a random value, multiply 181 by a random decimal, (essentially, dividing it randomly)
// round down to the nearest integer (possible results are 0 to 180)
// add min (20), so that the final result is between 20 and 200.

// Get the number of possible values (max - min) [add 1 if inclusive of the top of the range]
// choose a random number in that range by multiplying by a random decimal and rounding the result down to the nearest integer
// add the minimum to that number, to put the number back inside the desired range.