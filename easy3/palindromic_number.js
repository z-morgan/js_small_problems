/*
function takes an integer, and returns a bool indicating whether the digits in the integer
form a palindrome.

A:
convert the number to a string, and then use the same algo as before.


*/

function isPalindromicNumber(num) {
  let forward = String(num);
  return forward === forward.split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

console.log(isPalindromicNumber(010));     // true