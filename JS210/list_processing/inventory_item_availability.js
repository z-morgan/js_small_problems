'use strict';

/**
 * function takes an id integer and an array of transaction objects, and returns a boolean
 * indicating whether that are any items of the given id in stock. 
 * 
 * input: integer and array of objects
 * return: boolean
 * 
 * - transaction objects have id, movement, and quantity properties
 * - in stock means that the sum of the transactions has a positive quantity
 * - if the movement property on an object has a value of 'out', the quantity is
 *    treated as negative when summing transactions.
 * 
 * D: number?
 * 
 * A:
 * select the transaction objects with the given id
 * transform those objects to integers with the correct sign
 *  (according to their movement value)
 *    for each object:
 *    if the movement property is 'in':
 *      return quantity value
 *    if 'out':
 *      return -(quantity) value
 * sum the integers
 * return the result of sum > 0
 * 
 */

const isItemAvailable = function (idValue, allTransactions) {
  let itemTransactions = allTransactions.filter(({ id }) => id === idValue);

  let quantityIO = itemTransactions.map(({ movement, quantity }) => {
    let delta = 0;

    if (movement === 'in') {
      delta = quantity;
    } else if (movement === 'out') {
      delta = -quantity;
    }

    return delta;
  });

  return quantityIO.reduce((acc, ele) => acc + ele) > 0;
};

const transactions = [
  { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
