'use strict';

/*
input: integer from 1 to 100
return: integer which is the difference between the square of the sum of 
  all integers from 1 up to input and the sum of the squares of all integers
  from 1 up to input.

  q's:
- will the input ever be less than 1? no
- what is the max value? 100
- will the input ever be a non-integer number? no
- will the input ever be a differetn data type? no
- will there ever be 0 or more than 1 arguments? no


D: tally and loop


A:
create a squareSums tally starting at 0
create a sumSquares tally starting at 0

loop from 1 up to and including input:
  add current value to squareSums
  add square of current value to sumSquares

square squareSums

return squareSums - sumSquares

*/

function sumSquareDifference (maxNum) {
  let squareSums = 0;
  let sumSquares = 0;

  for (let currentNum = 1; currentNum <= maxNum; currentNum += 1) {
    squareSums += currentNum;
    sumSquares += (currentNum ** 2);
  }
  squareSums = squareSums ** 2;

  return squareSums - sumSquares;
}

// tests
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150