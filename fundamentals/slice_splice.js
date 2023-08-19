/*
slice:
takes an array, and two additional arguments which are integers. returns a new array
with the values from the input array from the first number's index up to, but not including the second number's index

- the number arguments will be greater than or equal to 0, and will be integers
- if either number is greater than the length of the array, set it to the length.
- since slice returns a new array, it does not mutate the input array

A:
initialize a variable to a result array
if the second argument is greater than arr.length, re-assign it to arr.length (skipped)
same for third argument

iterate from second argument up to but excluding third argument, and for each:
  add the element at that index in the input array to the result array
return the result array



splice:
function takes an array, a starting index, a count, and optional elements to insert. It removes "count" elements starting at "starting
index", and if there are elements to insert, inserts them at "starting index". splice returns a new array with the elements which were 
removed. An empty array is returned if no elements where deleted.

input: array, two numbers, optional additional values of any type
return: array

- the two numbers will always be 0 or greater integers
- if start is greater than the length, treat it as equal to the length
- if end is greater than the difference between start and the length of the array, set
    end to array length - start
- if no additional arguments are passed, don't add anything to the input array


D:

A:
define the function to convert additial arguments to a single array called elemenetsArr
initialize a new result array
if start index is greater than array.length, set it to array.length
if count is greater than array.length - start, set it to array.length - start

create a new trailing array and add the elements from index start + count - 1 to the end of the array
iterate from start index to start + count - 1, and for each index:
  add the element at that index in the input array to the result array
re-assign the length of the input array to the start index

iterate through the elementsArr, and push each element onto the input array
iterate through the trailing array and push each element onto the input array
return the result array

*/

function slice(array, begin, end) {
  const resultArr = [];
  for (let i = begin; i < end && i < array.length; i++) {
    resultArr.push(array[i]);
  }
  return resultArr;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

// ---------------

function splice(arr, start, count, ...elementsArr) {
  const resultArr = [];
  if (start > arr.length) start = arr.length;
  if (count > (arr.length - start)) count = arr.length - start;

  const trailingArr = arr.slice(start + count);
  
  for (let i = start; i < start + count; i++) {
    resultArr.push(arr[i]);
  }
  arr.length = start;

  for (let i = 0; i < elementsArr.length; i++) {
    arr.push(elementsArr[i]);
  }

  for (let i = 0; i < trailingArr.length; i++) {
    arr.push(trailingArr[i]);
  }

  return resultArr;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]