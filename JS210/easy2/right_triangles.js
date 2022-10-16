/*
function takes an integer, and logs to the console a right triangle where the 
sides have "integer" stars.

- the integer dictates the number of rows and columns
- starting with the first row having 1 star, each row has one additional star
- the first row has integer - row# spaces

D: strings

A:
loop from 1 up to and including "n":
  log a string composed of integer - row# spaces concatenated to r# stars

*/

function triangle(n) {
  for (let row = 1; row <= n; row++) {
    console.log(' '.repeat(n - row) + '*'.repeat(row));
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********