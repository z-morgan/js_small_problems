'use strict';

/*
input: an integer `n` from 1 to 78
return: the `n-th` number in the console.log(fibonacci sequence
  1 1 2 3 5 8 13
  1 2 3 4 5 6 7

if n = 1, return 1
if n = 2, return 1
else, return n - 1 + n - 2

to get the next fib number, after the first 2, sum the two fib numbers at positions n - 1 and n - 2

[1, 1, 2, 3, 5]

quesitons:
- invalid inputs?
  - integer less than 1 or greater than 78?
      return "cannot compute"
  - non-integer
      return "cannot compute"
  - additional values, ignore

D: array, which is a sequence of fib numbers

A:
validate:
  if isInteger && is < 78 && > 0
  else, "cannot compute"

if n < 3, return 1
build the sequence until it has a length equal to n:
  sum the values at len - 1 and len - 2
  push sum onto array
return last element in array

*/
// function isValidFibPosition(n) {
//   return Number.isInteger(n) && (n > 0) && (n < 79);
// }

// function fibonacci(n) {
//   if (!isValidFibPosition(n)) return "cannot compute";

//   if (n < 3) return 1;

//   let fibSeq = [1, 1];
//   while (fibSeq.length < n) {
//     let nextFib = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
//     fibSeq.push(nextFib);
//   }

//   return fibSeq[fibSeq.length - 1];
// }


// tests
// console.log(fibonacci());
// console.log(fibonacci(3.4));
// console.log(fibonacci(0));
// console.log(fibonacci(79));
// console.log(fibonacci(''));       // "cannot compute"
// console.log(fibonacci(1, 1));     // 1
console.log(fibonacci(1));        // 1
console.log(fibonacci(2));        // 1
console.log(fibonacci(3));        // 2
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
console.log(fibonacci(78));       // some value



// LS's solution
/*
A:
make an array with the first two fib numbers

iterate from 3 up to n inclusive, and for each iteration:
  re-assign the pair (x, y) to (y, x + y)

return the second element in the pair

*/

function fibonacci(n) {
  let pair = [1, 1];

  for (let count = 3; count <= n; count += 1) {
    pair = [pair[1], pair[0] + pair[1]];
  }

  return pair[1];
}