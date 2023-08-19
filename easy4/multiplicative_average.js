/*
write a function which takes an array of integers, multiplies them together, and then divides them by the
length of the array. Finally, it returns the result as a string with 3 decimal places

input: array
return: string

- if the number does not require 3 decimal places, pad with zeros to 3 decimal places
- input array will always have a value

D: array

A:
multiply the numbers together, and then divide by the length
convert that number to a string
split the string into an array on the decimal point. 
  (if the array has only one element, add one as an empty string)
  if the second element has a length greater than 3, trim it to 3
  while the length of the second element is less than 3:
    append a '0' to the element
join the array with a decimal point and return the resulting string
*/

let showMultiplicativeAverage = function (arr) {
  resultNum = arr.reduce((acc, num) => acc * num) / arr.length;
  resultArr = String(resultNum).split('.');
  if (resultArr.length === 1) {
    resultArr.push('000');
  }

  if (resultArr[1].length > 3) {
    resultArr[1] = resultArr[1].slice(0, 3);
  }

  while (resultArr[1].length < 3) {
    resultArr[1] += '0';
  }

  return resultArr.join('.');
}

// let showMultiplicativeAverage = function (arr) {
//   resultNum = arr.reduce((acc, num) => acc * num) / arr.length;
//   return resultNum.toFixed(3);
// }


console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"