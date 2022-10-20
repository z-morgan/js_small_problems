/*
pop returns the last element of an array, removing it from the array. IF the array was empty, returns undefined instead
- takes one argument
- if input array is empty, returns undefined
    if input array has a length of zero?

A:
if the argument's length is zero
  return undefined
else 
  copy the last element to a variable
  delete the last element
  return the element


push adds one or more elements to the end of an array, and returns the new length property

A:
if the second argument is undefined, return the current length of the input array
iterate through the elements in the second argument, 
  append each to the input array at arr[arr.length]
return the new length property

*/

function pop(arr) {
  if (arr.length === 0) return undefined;

  const lastEle = arr[arr.length - 1];
  arr.length -= 1;
  return lastEle;
}

function push(arr, ...elements) {
  // if (elements === undefined) return arr.length;
  for (let ele of elements) {
    arr[arr.length] = ele;
  }
  return arr.length;
}

pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
// const array2 = [1, 2, 3];
// console.log(push(array2, 4, 5, 6));              // 6
// console.log(array2);                // [1, 2, 3, 4, 5, 6]
// console.log(push([1, 2], ['a', 'b']));          // 3
// console.log(push([], 1));                       // 1
console.log(push([]));                          // 0