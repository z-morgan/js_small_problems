'use strict';

/*
input: 3 integers representing sides of a triangle
return: a string indicating the status of the triangle
 - invalid if:
  - any sides have a value of zero or less
  - the sum of the two smaller sides is less than the greater side
 - equilateral if: all three sides are equal
 - isosceles if: two sides are equal
 - scalene if: all three sides are unequal

Qs:
- will negative numbers be passed in?
 - no
- what about non-number values?
 - no
- will less than or greater than 3 arguments ever be passed? 
 - no
- what about special numbers (NaN)?
 - no

D: flow control

A:
invalid if:
  any of the inputs is 0
  sum every combination of two sides, and if any sum is not greater than 
    the third side

 - equilateral if: all three sides are equal
 - isosceles if: two sides are equal
 - scalene if: all three sides are unequal

*/

function triangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0)       return "invalid";
  if (a + b < c || b + c < a || a + c < b) return "invalid";

  if ((a === b) && (b === c)) {
    return "equilateral";
  } else if (a === b || b === c || a === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

// tests

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"