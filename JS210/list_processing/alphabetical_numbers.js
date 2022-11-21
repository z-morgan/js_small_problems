/**
 * function takes an array of numbers ranging from 0 to 19, and returns a sorted copy of 
 * that array where the numbers are sorted based on the english word for each number (words sorted lexigraphically)
 * 
 * input: array
 * return: array
 * 
 * - cannot mutate the argument that is passed in.
 * - sort based on the lexigraphical order of the english words
 * - array have duplicate numbers
 * - the array can be variable length
 * - empty array returns empty array (new one)
 * 
 * D:
 * 
 * A:
 * write an associative array which maps the numbers to their english names
 * write a function which takes two numbers, and orders them based on english names
 *    -1 is if num1 < num2
 *    0 is if num1 === num2
 *    1 is if num1 > num2
 * 
 * duplicate the input array, 
 * sort that array based on the sorting function helper
 * return the sorted array
 * 
 */

const ENGLISH_LETTERS = {
  0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven',
  12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixtenn',
  17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
};

const orderByEngName = function (num1, num2) {
  num1 = ENGLISH_LETTERS[num1];
  num2 = ENGLISH_LETTERS[num2];

  if (num1 < num2) {
    return -1;
  } else if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  }
};

const alphabeticNumberSort = function (numsArr) {
  return numsArr.slice().sort(orderByEngName);
};

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

console.log(alphabeticNumberSort([8, 8, 18, 18]));  // [8, 8, 18, 18]


let arr = [];
let returnedArr = alphabeticNumberSort(arr);  // []

console.log(arr !== returnedArr);
console.log(returnedArr);

