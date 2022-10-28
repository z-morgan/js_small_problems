function penultimate(string) {
  let arr = string.split(' ');
  return arr[arr.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

/*
the problem is that at the end of line 2, the function tries to access the desired element
from the array returned by the `string.split(' ')` expression using an invalid index. `-2`
references a `'-2'` property on the array which does not exist, which is why the function returns 
`undefined` on lines 5 and 6.

To fix this issue, we first move the `string.split(' ')` expression to become the initializer for a
newly declared variable `arr`. This gives us a handle for the array, so that on line 3, we can query its
`length` property, and access the element at the second to last index.
*/

// alternative solution:
function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"