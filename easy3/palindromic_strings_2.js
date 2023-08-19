/* 
write a function which takes a string and returns a boolean indicating whether the string
is a palindrome.

- case-insensitive ('M' is the same as 'm')
- only accounts for alphanumberic chars

D: array

A:
get an array containing the chars of the forward string excluding all non-alphanumerics
  split the string into an array where every character is one element
  select the elements from the array which are alphanumeric
downcase all of the chars. 
convert array back to string. Now we have the forward version for comparison
reverse the array
convert reversed array to string
compare the two strings, and return the result.

downcase the string
remove all non-alphanumeric chars from it
conver to an array, reverse, join it back
compare it to forward str.

*/

// function isRealPalindrome(str) {
//   let charsArray = str.split('').filter(char => /[a-z0-9]/i.test(char));
//   let lowerCharsArray = charsArray.map(char => char.toLowerCase());

//   let forwardStr = lowerCharsArray.join('');
//   let revStr = lowerCharsArray.reverse().join('');
//   return revStr === forwardStr;
// }

function isRealPalindrome(str) {
  let cleanedString = str.toLowerCase().replace(/[\W_]/g, '');
  return cleanedString === cleanedString.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));              // true
console.log(isRealPalindrome('Madam'));              // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));    // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));             // true
console.log(isRealPalindrome('356a653'));            // true
console.log(isRealPalindrome('123ab321'));           // false