/*
write a function which takes two strings, determines the length of each, and then returns 
a new string consisting of the short string followed by the long string, and then the short
string again. 

input: two strings
retur: string

- the strings will always be different lengths
- if there is an empty string, simply return the other string
    - could also treat empty string as string with length zero?
- the contents of the strings are irrelevant

D: new string

A:
if the second string is longer than the first:
  assign the second string to a variable long
  assign the first string to a variable short
else
  swap them
return short -> long -> short


*/

function shortLongShort(a, b) {
  return a.length > b.length ? (b + a + b) : (a + b + a);
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"