'use strict';

/*
reqs:
before making a recursive call, see if the value of n exists in the hash
before returning the value, save the answer as a value in a hash where the key is n

*/


let computedFibs = {
  1: 1,
  2: 1,
};

function fibonacci(n) {
  if (computedFibs[n]) {
    return computedFibs[n];
  } else {
    let fib = fibonacci(n - 1) + fibonacci(n - 2);
    computedFibs[n] = fib;
    return fib;
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765