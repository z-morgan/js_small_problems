/**
 * write a function which takes a string consisting of first name and last name 
 * sparated by a space
 */

// const swapName = function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// };

const swapName = function swapName(name) {
  let [first, first2, last] = [...name.split(' ')];
  return [last, first + ' ' + first2].join(', ');
};

console.log(swapName('Joe Martin Roberts'));    // "Roberts, Joe"