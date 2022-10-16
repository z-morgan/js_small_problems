/*
function takes a number, and returns the number multiplied by 2 unless it is a double number,
in which case the number is returend.

input: number
return: number

- rules for a double number:
  - has an even number of digits (e.g. 4040 has 4 digits)
  - the first half of the digits are identical to the second half of the digits
    (4040 can be divided into 40 and 40, 344344 -> 344 and 344, 4554 is not a double number)
  
D: string

A:
convert the input number to a string
if the length of the string is even,
  split the string in half,
  if the halves are equal to each other,
    return number

return number * 2
*/

let isDoubleNum = number => {
  let numString = String(number);

  if (numString.length % 2 === 0) {
    let half1 = numString.substring(0, numString.length / 2)
    let half2 = numString.substring(numString.length / 2)
    if (half1 === half2) return true;
  }

  return false
}

let twice = num => isDoubleNum(num) ? num : num * 2;

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676