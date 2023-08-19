/*
function takes an array, and returns a new array where each element in the array is the running totals of the 
values in the input array from the first element to the current element.

input: array
return: array

- empty array returns empty array

D: new array

A:
create a new array
create a variable to track the last element
iterate over the elements in the input array and for each:
  get the result of summing the current element and the previous element
  set the prev-element variable to this value
  push this value onto the new array
return the new array

create a new array, with the value at the first index in the input array
iterate from index 1 up to the last index in the input array, and for each:
  sum the values of the elements at current index (input array) and last index in the result array
  push this value onto the new array
return the new array

create a variable to store the last element's new value, set to 0
transform each element in the array based on summing the current element with the last element
  re-assign the last-element variable to the new value
*/

function runningTotal(inputArr) {
  let totals = [];
  let currentTotal = 0;

  inputArr.forEach(num => {
    currentTotal += num;
    totals.push(currentTotal);
  });

  return totals;
}

// while this works, the arrow function is not great becuase it has a side effect AND returns a useful value.
function runningTotal(inputArr) {
  let currentTotal = 0;
  return inputArr.map(num => currentTotal += num);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []