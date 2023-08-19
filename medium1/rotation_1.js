'use strict';

/*
function takes an array and returns a new array with the head moved to the end.

input: array - can be empty, can also not be an array
return: new array - can be emtpy, can be undefined

reqs:
- rotate means take the first element off and add it to the end
- return a new array 
- don't mutate the argument passed in
- if argument is not Array type, return  `undefined`
- also return `undefined` if no argument passed in
- if array is empty, return empty array
- The array elements can be of many types (even in the same array):
  - Number, String, Object... etc. 
  - write f(x) to work with any kind of element
- if array has only one element, return a copy of the argument array

Q's:
- can more than one argument be passed in?
  - assume yes, ignore extras
- can the array be sparse or have non-index/key propeties?
  - no...

D: copy of argument array

A:
if argument is not Array, return `undefined`
array is empty, return empty array

make a copy of the input array
shift off the first element in the copy
push it to the end
return mutated copy

*/

const rotateArray = function (inputArr) {
  if (!Array.isArray(inputArr)) return;
  if (inputArr.length === 0) return [];

  return inputArr.slice(1).concat(inputArr[0]);
};

// // tests
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// // the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

rotateArray([1, 2, 3], ['a', 'b']);    // [2, 3, 1]