/* 
write a function which takes two arrays, and returns a new array containing the results of concatenating the 
argument arrays together. 

input: array and either an array or another value
return: new array

- the first argument will always be an array
- the second argument can be a value other than an array
- if the second argument is not an array, add it to the new array as an element
- any objects in the original arguments (meaning in the array arguments, or objects
    which themselves are passed in as arguments) are passed by reference into the new 
    array.


D:
new array

A:
create a result array initialized to a shallow copy of the first argument
if the second argument is not an array
    add it the the result array
otherwise
    iterate through the second argument array, and for each
        add the element to the result array
return the result array

*/

function concat(array1, ...secondArgument) {
  const resultArr = array1.slice();

  for (let arg of secondArgument) {
    if (Array.isArray(arg)) {
      for (let ele of arg) {
        resultArr.push(ele);
      }
    } else {
      resultArr.push(arg);
    }
  }

  return resultArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]