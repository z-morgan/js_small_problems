'use strict';

/*
write a function which takes an array and uses the bubble sort algo to sort that array destructively

input: array with a length >= 2
  - elements can be numbers or strings
return: undefined

reqs:
- function sorts the array in-place
  - meaning that it mutates the array as it runs
- returns undefined. function's behavior works through side-effect of mutating the array object
- bubble sort:
  - sorts by making multiple passes over the array
  - on each pass, each iteration compares consecutive overlapping pairs of elements
    if the first element > second element, swap them
  - soritng is complete when a complete pass is made where no swaps occur
- numbers are sorted by magnitude (comparison operators)
- strings are sorted lexigraphically (^)


Q's:
- can elements be of any other data type? no
- What is the max length an input array can be? 7 elements
- What should the function return? `undefined`



D: the input array, and looping

A:
set a swapped flag to true;

while swapped flag is true:
  set swapped flag to false
  iterate over consecutive overlapping pairs of elements, and for each pair:
    (iterate from 0 up to inputArray.length - 2, and for each iteration
      get an array with elements at index and index + 1)
    if first ele > second ele
      set swapped flag to true
      swap the elements in the input array
*/

function bubbleSort(inputArr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < (inputArr.length - 1); i += 1) {
      if (inputArr[i] > inputArr[i + 1]) {
        let temp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped)
}

// tests

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]