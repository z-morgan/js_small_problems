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

function concat(array1, secondArgument) {
  const resultArr = array1.slice();
  if (Array.isArray(secondArgument)) {
    for (let ele of secondArgument) {
      resultArr.push(ele);
    }
  } else {
    resultArr.push(secondArgument);
  }
  return resultArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]))         // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3))                    // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']))     // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'))               // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
// console.log(newArray);                          // [2, 3, { a: 2, b: 3 }]
// console.log(newArray[2]);
console.log(obj.toString());
obj.a = 'two';
console.log(newArray)                             // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3)                                 // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3)                                 // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                        // or, `arr3[5]['b'] = 3;`
console.log(obj)                                  // { a: "two", b: 3 }
