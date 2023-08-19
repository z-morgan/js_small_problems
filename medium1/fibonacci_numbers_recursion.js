'use strict';

/*
input: an integer `n` greater than 0
return: the n'th fibonacci number
  - fibNum: 1 1 2 3 5
  - n:      1 2 3 4 5

reqs:
- fib seq rules:
- 1st is 1
- 2nd is 1
- others: the sum of the previous 2 numbers

Q's: 
will there be any invalid input? 
  - non-Number values
  - Numbers other than integers greater than 0
  - no input, or more than one input
  - answer to all is NO

D:

A:
base condition:
  if n is 1, return 1
  if n is 2, return 1

else:
for n, result is 
fib(n - 1) + fib(n - 2)
  

*/

function fibonacci(n) {
  return n <= 2 ? 1 : (fibonacci(n - 1) + fibonacci(n - 2));
}

// tests

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765