'use strict';

/*
input: three integers representing the angles of a triangle
return: a string inticating the classification of the triangle or "invalid"
  - invalid if:
    - a + b + c !== 180
    - a || b || c === 0
  - right if any angle is 90
  - objuse if any angle is greater than 90
  - acute if all angles are less than 90

reqs:
- all inputs will be integers, and there will be the correct number of arguments

Q's:
- will the type always be Number? yes

D:
flow control again

A:
  - invalid if:
    - a + b + c !== 180
    - a || b || c === 0
  - right if any angle is 90
  - objuse if any angle is greater than 90
  - acute if all angles are less than 90


*/

function triangle(x, y, z) {
  if ((x + y + z) !== 180) return "invalid";
  if (x === 0 || y === 0 || z === 0) return "invalid";

  if (x === 90 || y === 90 || z === 90) {
    return "right";
  } else if (x > 90 || y > 90 || z > 90) {
    return "obtuse";
  } else {
    return "acute";
  }
}

// tests

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"