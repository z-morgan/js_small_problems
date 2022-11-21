'use strict';

/**
 * write a function which takes an array, and tallies the number of
 * occurances of
 * each element. It then logs each unique element to the console
 * along with the number
 * of occurances
 * 
 * input: array
 * output: unique elements and number of occurances
 * 
 * - elements seem to be of any type
 * - it does not matter what order the elements are logged in
 * 
 * D:
 * object
 * 
 * A:
 * create an empty object to store the tallies
 * iterate through the array, and for each element:
 *  if the element exists as a property on the object
 *    increment it's value by 1
 *  otherwise, create it with a value of 1
 * iterate through the properties of the object and for each:
 *  log the key and value to the console.
 */

const countOccurrences = function countOccurrences(inputArr) {
  const tallies = inputArr.reduce(((acc, ele) => {
    acc[ele] = acc[ele] || 0;
    acc[ele] += 1;
    return acc;
  }), {});

  for (let vehicle in tallies) {
    console.log(`${vehicle} => ${tallies[vehicle]}`);
  }
};

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2