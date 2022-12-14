/*
Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

P:
input: an odd integer 7 or greater
  - always a valid input 
  - can be up to 15
  - input will always be supplied (exactly 1)

return: undefined

output: an 8-pointed star with input x input dimensions
  - input is hence-forth termed `n`
  - n rows and n columns
  - for all rows except the halfway point:
    - lineNumber is the row identifier, but reverses at the halfway point
    - leadSpaces = lineNumber - 1
    - gapSpaces = floor(n / 2) - lineNumber
    - row is leadSpaces + '*' + gapSpaces + '*' + gapSpaces + '*'
  - for the halfway row: row is all stars
  - what is halway row? lineNumer === ceil(n / 2)

D: loop with variables to track number of spaces

A:
set lineNumber to 1
for lineNumber + 1 up to excluding lineNumber === ceil(n / 2):
  set leadSpaces to lineNumber - 1
  set gapSpaces to floor(n / 2) - lineNumber
  log the row using rule:
    row is leadSpaces + '*' + gapSpaces + '*' + gapSpaces + '*'

log middle row of n stars

perform the same loop, but decrement line Number down to 0 exclusive

*/

function buildArms(n, lineNumber) {
  let leadSpaces = lineNumber - 1;
  let gapSpaces = Math.floor(n / 2) - lineNumber;
  return ' '.repeat(leadSpaces) + '*' + ' '.repeat(gapSpaces) + '*' + ' '.repeat(gapSpaces) + '*';
}

function star(n) {
  for (let lineNumber = 1; lineNumber < Math.ceil(n / 2); lineNumber += 1) {
    console.log(buildArms(n, lineNumber));
  }

  console.log('*'.repeat(n));

  for (let lineNumber = Math.floor(n / 2); lineNumber > 0; lineNumber -= 1) {
    console.log(buildArms(n, lineNumber));
  }
}

// tests
star(7);
// logs. 
// *  *  *. 0sp 1st 2sp 1st 2sp 1st.  1
//  * * *.  1sp 1st 1sp 1st 1sp 1st.  2
//   ***.   2sp 1st 0sp 1st 0sp 1st.  3
// *******  7st                       4
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(15);