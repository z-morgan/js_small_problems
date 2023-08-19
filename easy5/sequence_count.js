/**
 * write a function which takes two arguments, a zero-or-greater number representing 
 * the count, and a integer of any value representing the first value. The function
 * returns an array of length `count` where each element after the first value is a multiple
 * of the first value.
 * 
 * input: numbers
 * return: array
 * 
 * - count will always be an integer of 0 or greater
 * - first value will be an integer of any value
 * - if the count is 0, return an empty array
 * - by multiple, I mean that each element is the result of adding `first value` to the
 *    previous element's value.
 * 
 * D: array
 * 
 * A:
 * initialize an empty array
 * iterate from count down to zero, for each value:
 *  if array is empty, push on `first value`
 *  else, add `first value` to the last element in the array
 *    push the result onto the array
 * return the array
 */

const sequence = function sequence(count, firstNum) {
  const multiples = [];

  while (count > 0) {
    if (!multiples.length) {
      multiples.push(firstNum);
    } else {
      multiples.push(firstNum + multiples[multiples.length - 1]);
    }

    count -= 1;
  }

  return multiples;
};

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []