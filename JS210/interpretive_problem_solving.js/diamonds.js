/*
write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

input: odd integer
  - 1 to 9

reqs:
- output a diamond with the width and height specified by the input
- for input number `n`, the midpoint is (n / 2) rounded up = h
- number of spaces is `h` - line number (for the first half)
- number of stars is line number + (line number - 1)
-- return undefined

Q's:
- what is the minimum and maximum values which the input can be?
-- what should the function return?

D: loop which builds strings

A:
initialize line number to 1

loop n times as count:
  initialize spaceCount = (n/2 rounded up) - lineNumber
  initialize starCount = lineNumber * 2 - 1

  concat ' ' * spaceCount and '*' * starCount
  log that string to console

  if count > 1/2 n
    decrement lineNumber
  else
    increment lineNumber
*/

function diamond(n) {
  let lineNumber = 1;
  for (let count = 1; count <= n; count += 1) {
    let spaceCount = Math.ceil(n / 2) - lineNumber;
    let starCount = (lineNumber * 2) - 1;
    
    console.log(' '.repeat(spaceCount) + '*'.repeat(starCount));

    if (count > (n / 2)) {
      lineNumber -= 1;
    } else {
      lineNumber += 1;
    }
  }
}

// tests

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *


diamond(9);
// logs
//     *        4 sp + 1 st.  1
//    ***       3 sp + 3 st   2
//   *****      2 sp + 5 st.  3
//  ******* 
// *********    0 sp + 9 st.  5.  
//  *******     1 sp + 7 st.  6
//   *****
//    ***
//     *