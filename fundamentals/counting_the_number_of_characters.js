// prompt the user for some text
// return the number of characters they enter using the length prop.
// write a method to accurately determine the number

let RLS = require("readline-sync");
let phrase = RLS.question("Please Enter a Phrase: ");

phrase = phrase.replace(/[\W0-9_]/g, "")
console.log(phrase)


// `String.prototype.replace()` takes two arguments--a pattern, and a replacement
// The pattern can be a pattern string or a regex. 
// The replacement can be a string, or a function invocation.

// if the pattern is a string, or a regex without the `g` flag, 
// only the first matching substring is replaced. 
// if the pattern is a regex with a `g` flag, all matching substrings
// are replaced. 

// if the replacement is a funtion invocation, it should be invoked without any arguments,
// as these will be implicitly passed in. The function should be defined so as to return the 
// value which will become the replacement for each match. See the documentation for possible function
// parameters.