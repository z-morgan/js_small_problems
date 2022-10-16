/*
1, 1, 2, 3, 5

n = n-1 + n-2 after the initial values of 1 and 1.

function takes an integer greater than 1, and returns the 1-based index of the first 
fibonacci number with that number of digits.

input: integer (representing teh number of digits)
return: integer (representing the index of the first fib. num. w/ that number of digits)

- fibonacci sequences is defined by 1 and 1 with each subsequent number being the 
    sum of the two previous numbers.
- the first fib number has an index of 1
- use BigInt, since many numbers are larger than Number.MAX_SAFE_INTEGER
- the input can be 2 or higher

D:

A:
- checking the number of digits
- generating fib nums
- finding the index

set an index variable to 3
set fib1 variable to 1
set fib2 varialbe to 1
loop through the following:
  set the sum of fib1 and fib2 to a temp variable
  re-assign fib1 to fib2
  re-assign fib2 to temp variable
  
  check number of digits in fib2
    if equal to input
      return index
    else
      index += 1


Checking number of digits
  convert number to string
  get the length of string

*/

const countDigits = num => BigInt(String(num).length);

const findFibonacciIndexByLength = numberOfDigits => {
  let index = 3n;
  let fib1 = 1n;
  let fib2 = 1n;

  while (true) {
    let nextFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextFib

    if (countDigits(fib2) === numberOfDigits) return index;
    index += 1n
  }
}


console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.