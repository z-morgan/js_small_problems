/*
write a function which takes a string, and returns a boolean indicating whether the string is a palindrome

input: string
return: bool

- palindrome means that the string is the same forwards and backwards
- method is case-sensitive - 'M' is not the same as 'm'
- all chars count, even whitespaces chars
- digits are valid too

D:
string

A:
get the reversed version of the string
  create an empty string
  iterate through the chars, and for each:
    add the character to the front of the string
    (re-assign the variable to the result of concatonationg the current char with the string)
return the result of comparing the forward version with the reversed version

*/

function reverseString(str) {
  let rev = '';
  for (let char of str) {
    rev = char + rev;
  }
  return rev;
}

function isPalindrome(str) {
  let rev = reverseString(str);
  return rev === str;
}


/*
D: array of chars

A:
split the string into an array of chars
reverse the array
join the elements back into a string
compare the strings and return the result

*/

function isPalindrome(str) {
  let rev = str.split('').reverse().join('');
  return rev === str;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true