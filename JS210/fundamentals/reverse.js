/*
function takes a string or an array, and returns a new string or array with the characters or elements in reverse order

input: string or array
return: string or array (new)

- returns the data type that is passed in
- if the argument is empty, return an empty value
- since function returns a new value, the original value is not mutated.

D: array?

A:
iterate from the length - 1 of the argument, down to zero and for each:
  add the element at that position to a new array
if the input argument is an array, return the new array
else, convert the new array to a string (w/out delimiting chars) and return it.

*/

function reverse(inputForReversal) {
  const reversedElements = [];
  for (let i = inputForReversal.length - 1; i >= 0; i -= 1) {
    reversedElements.push(inputForReversal[i]);
  }
  
  if (Array.isArray(inputForReversal)) {
    return reversedElements;
  } else {
    return reversedElements.join('');
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]