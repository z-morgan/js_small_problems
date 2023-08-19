/**
 * function takes a number, and returns the sum of all of the individual digits in the number
 * input: number
 * return: number
 * 
 * - cannot use for or while loops, instead use method calls
 * 
 * D: array of digits?
 * 
 * A:
 * get a series of digits
 * sum those digits
 * 
 * convert the input number to string
 * convert string to array of digits
 * perform reduction by converting elements to numbers
 *  and then adding them together
 * return the reduced value
 * 
 */

const sum = function (num) {
  let numsArray = String(num).split('').map(digit => Number(digit));
  return numsArray.reduce((acc, num) => acc + num);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
