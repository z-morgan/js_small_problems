// second try at this exercise. Function extensively validates input also

/*
write a function which takes an array of numbers, and returns a number which is the sum of all leading subsequences in the input array

input: array of numbers
- must validate this, can be 0 or many arguments
  - if zero arguments, or no valid arguments return 0
  - if more than one input array, sum the results of calling this function with 
    each individual array
  - arguments can be any data type... so must validate as arrays
    - ignore argumetns which are not arrays
    - for array arguments, arrays will always have at least one number
      - arrays can have other data types as elements, but they should be ignored
      - Decimal Numbers are valid
      - Special Numbers are invalid
      - Ignore empty indices in sparse arrays (treat as invalid elements)
      - ignore elements whose key is not an index

return: Number
- if the sum is decimal, return that
- what is a leading subsequence?
  - a sequence of consecutive elements which starts with the first element in the array
    - if the first element is invalid, ignore that array altogether.
    - if the subsequence contains invalid elements, ignore those elements and sum the others
    - subsequences can be of length 1 up to the length of the array

D: array of leading subsequences

A:
get an array of all valid array arguments
  not only must they be arrays, but the first element must be a Number

for each array argument:
  transform each element in array to an array containing the leading subsequence
    terminating at that index (ele, idx, array) 

      ignore any elements which are not Normal Numbers

  reduce each subsequence to its sum
  reduce the sums to a total sum
reduce the totals for each array argument to a single sum

leadingSubsequences(ele, idx, array)
  get the values of all elements in the range
    select the elements which are normal Numbers

*/

function isValidNum(num) {
  return (typeof num === 'number' && !Number.isNaN(num) && num !== Infinity && num !== -Infinity);
}

function isValid(arg) {
  return (Array.isArray(arg) && isValidNum(arg[0]));
}

function leadingSubs(_, i, arr) {
  let subArr = arr.slice(0, i + 1);
  return subArr.filter(isValidNum);
}

// implemented this function to deal with sparse arrays. That was the only test case which my algo didn't cover.
function mapWithSparse(arr, leadingSubs) {
  let transformNoSparse = arr.filter(ele => ele !== undefined).map(leadingSubs);
  let additionalSubs = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === undefined) {
      additionalSubs.push(leadingSubs(arr[i - 1], (i - 1), arr));
    }
  }
  return transformNoSparse.concat(additionalSubs);
}

function sumOfSums(...allArgs) {
  let validArgs = allArgs.filter(isValid);
  
  return validArgs.reduce((runningTotal, arr) => {
    let sequences = mapWithSparse(arr, leadingSubs);
    let arrSum = sequences.reduce((sum, seq) => {
      return sum + seq.reduce((sum, ele) => sum + ele, 0);
    }, 0);

    return runningTotal + arrSum;
  }, 0);
}

console.log(sumOfSums([3, 5, 2]) === 21);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]) === 36);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]) === 4);              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]) === 35);  // 35

console.log(sumOfSums() === 0);
console.log(sumOfSums({0: 1}) === 0);
console.log(sumOfSums([4], [3]) === 7);
console.log(sumOfSums(4, 5, [1]) === 1);
console.log(sumOfSums({0: 1, 1: 2}, [1]) === 1);
console.log(sumOfSums([1, '1', 2]) === 5);       // 1 + 1 + (1 + 2)
console.log(sumOfSums([1.5, 2]) === 5);
console.log(sumOfSums([1, NaN]) === 2);
console.log(sumOfSums([1, , 2]) === 5);

let arr = [1];
arr['a'] = 1;
console.log(sumOfSums(arr) === 1);
console.log(sumOfSums([1.5]) === 1.5);
console.log(sumOfSums([1], [NaN, 1]) === 1);

/*
Q's:
- will there always be exactly one argument passed? - no, can be 0 or 2+
- will arguments always be arrays? or can they be of other objects or primitive types?
  - can be any kind of value
- will arrays only contain number elements? - no, can also contain other values as elements
  - ignore elements which are not Number types
  - will Numbers be integers? or can they also be floats? - can be floats
  - will there be special Number values? yes, ignore them
- will arrays ever be sparse? - they may be
  - ignore empty indices
- can arrays have elements whose property keys are not indices? - yes
*/