/* 
the `shift` function takes an array, and removes the first element from it, returning that element. If the 
array is empty, return undefined instead.

`unshift` adds its arguments to the beginning of the array, and returns the new length of the array.

- both functions mutate the array that is passed in.
- when unshift only receives the array argument, it does nothing to it, and returns the length.

shift
A:
if the input array has a length of zero, return undefined
store the first element in a variable for later
iterate from zero up to the length of the array - 2 and for each index:
  re-assign the element at that index to the element at the next index
reduce the length of the array by 1
return the stored first element

unshift
A:
add any arguments after the array argument to a new array
reverse the input array
reverse the new elements array
iterate through the new elements array, and for each element:
  push element onto the input array
reverse the input array so it is forward again
return the length of the input array
*/

function shift(inputArr) {
  if (inputArr.length === 0) return undefined;

  const firstEle = inputArr[0];
  for (let i = 0; i <= inputArr.length - 2; i++) {
    inputArr[i] = inputArr[i + 1];
  }
  inputArr.length -= 1;
  return firstEle;
}

function unshift(inputArr, ...newElements) {
  inputArr.reverse();
  newElements.reverse();
  newElements.forEach(ele => inputArr.push(ele));
  inputArr.reverse();
  return inputArr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]

