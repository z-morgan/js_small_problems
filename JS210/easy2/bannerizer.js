/*
function takes a string, and outputs the string inside a box to the console.

- top and bottom border have a "+-" on each end, and a "-" for every 
    character in the string.
- 2nd and 4th lines have "| " and then spaces for each character
- middle line has "| " and then the input string

A:
build line 1
  concatonate "+-" with string length number of "="'s, and then with "-+"
build line 2
  concatonate "| " with string length number of " "'s, and then with " |"
build line 3
  concatonate "| " with the string, and then with " |"

log line 1, 2, 3, 2, 1

*/

// function logInBox(string) {
//   let line1 = "+-";
//   let line2 = "| ";
//   let line3 = "| ";

//   for (let char of string) {
//     line1 += "-";
//     line2 += " ";
//     line3 += char;
//   }

//   line1 += "-+";
//   line2 += " |";
//   line3 += " |";

//   console.log(line1);
//   console.log(line2);
//   console.log(line3);
//   console.log(line2);
//   console.log(line1);
// }

// logInBox('To boldly go where no one has gone before.');

// /*
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// */

// logInBox('');

// /*
// +--+
// |  |
// |  |
// |  |
// +--+
// */

/*
FE: add an optional maximum box width parameter, and truncate the message 
if it does not fit in the max width

A:
if a width is supplied, 
  if the string is longer than width - 4,
    re-assign string to the width - 4 leading substring
*/

// function logInBox(string, width) {
//   if (width) {                                  // note: I could omit this `if`, but it's a bit confusing
//     if (string.length > (width - 4)) {
//       string = string.substring(0, (width - 4));
//     }
//   }

//   let line1 = "+-";
//   let line2 = "| ";
//   let line3 = "| ";

//   for (let char of string) {
//     line1 += "-";
//     line2 += " ";
//     line3 += char;
//   }

//   line1 += "-+";
//   line2 += " |";
//   line3 += " |";

//   console.log(line1);
//   console.log(line2);
//   console.log(line3);
//   console.log(line2);
//   console.log(line1);
// }

// logInBox('To boldly go where no one has gone before.', 42);

/*
+----------------------------------------+
|                                        |
| To boldly go where no one has gone bef |
|                                        |
+----------------------------------------+
*/


/* 
FE continued: Edit the function so that instead of chopping the string, it causes it to wrap to 
a new line inside the box.

- if string is too long, must:
  - determine how many additional lines are needed
  - initialized that many more variables
  - add the substrings to their respecive variables

A:
if string is too long, must:
  determine how many additional lines are needed
    divide the string length by width - 4
    the result is the number of ADDITIONAL text lines
  initialized that many more variables
  add the substrings to their respecive variables

add a " |\n| " every width - 4 places in the string

*/

function logInBox(string, width = Infinity) {


  const CHARS_PER_LINE = width - 4;

  let line1 = "+-" + "-".repeat(CHARS_PER_LINE) + "-+";
  let line2 = "| " + " ".repeat(CHARS_PER_LINE) + " |";
  let line3 = "| ";

  for (let index in string) {
    if ((index % CHARS_PER_LINE === 0) && index > 0) {
      line3 += " |\n| "
    }

    line3 += string[index];
  }

  let trailingSpaces = CHARS_PER_LINE - (string.length % CHARS_PER_LINE);
  if (trailingSpaces !== CHARS_PER_LINE) {
    while (trailingSpaces > 0) {
      line3 += " ";
      trailingSpaces -= 1;
    }
  }

  line3 += " |";

  console.log(line1);
  console.log(line2);
  console.log(line3);
  console.log(line2);
  console.log(line1);
}


logInBox('To boldly go where no one has gone before.', 30);

//
// +----------------------------------------+
// |                                        |
// | To boldly go where no one has gone bef |
// | ore.                                   |
// |                                        |
// +----------------------------------------+
//