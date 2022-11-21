/**
 * input: array of numbers
 * return: number
 * 
 * - leading subsequence means that sub-arrays always start with the first number and run to the next number to be 
 * included in a sub-array.
 * - input array is never empty
 * 
 * D:
 * 
 * A:
 * get all leading sub-arrays
 *  create an empty sub-arrs array
 *  create an empty leadingSub array
 *  iterate through the nums and for each:
 *    add num to leadingSub
 *    add leadingSub to sub-arrs
 * sum their contents
 *    transform each sub-array to the sum of its contents
 * add the sums together
 * 
 * 
 */

const sum = (a, b) => a + b;

function sumOfSums(arr) {
  let subArrs = [];
  let leadingSub = [];

  arr.forEach(num => {
    leadingSub.push(num);
    subArrs.push(leadingSub.slice());
  });

  let sums = subArrs.map(sub => sub.reduce(sum));
  return sums.reduce(sum);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35