
/**
 * function takes a 2-D array as an argument, where the sub-arrays have the name of a fruit and
 * a quantity. Returns an array containing fruit names where each name occurs the same number of times
 * as its associated quantity.
 * 
 * input 2D array
 * return: array
 * 
 * - the input will not be empty
 * - each sub-array will have a valid name and quantity
 * - the returned array must be ordered according to the order of the input array
 * 
 * D: array
 * 
 * A:
 * transform each sub-array into an array with the fruit name
 *  appearing `quantity` number of times
 *    for each sub-array:
 *      create an empty array for storage
 *      loop `quantity` number of times:
 *        add fruit name to storage array
 * .    return the storage array
 * 
 * flatten that array
 * 
 */

'use strict';

const repeat = function ([ item, quantity ]) {
  let list = [];

  while (quantity > 0) {
    list.push(item);
    quantity -= 1;
  }

  return list;
};

const buyFruit = function (groceryList) {
  return groceryList.map(repeat).flat();
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
