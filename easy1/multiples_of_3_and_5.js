/*
function which takes a number greater than 1, and returns the sum of all numbers
between 1 and that number which are multiples of 3 or 5.

input: number
return: number

- inputs will be integers
- inputs will be greater than 1
- the computation includes the number which is passed in
- if two is passed in, return 0

D: loop over the interval, and keep an accumulating value

A:
create an accumulating variable, set to 0
loop from 1 up to (and including) the input number, and for each:
  if the number is divisible evenly by 3 or 5
    add to the accumulator
return the accumulator

*/

function multisum(max) {
  let acc = 0;
  for (let n = 1; n <= max; n++) {
    if (n % 3 === 0 || n % 5 === 0) {
      acc += n;
    }
  }
  return acc;
}


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168


// here's a version that takes an array instead:

// function multisum(arr) {
//   return arr.reduce((acc, num) => {
//     if (num % 3 === 0 || num % 5 === 0) {
//       return acc + num;
//     } else {
//       return acc;
//     }
//   }, 0);
// }

// console.log(multisum([1, 2, 3]));
// console.log(multisum([1, 2, 3, 4, 5]));
// console.log(multisum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));