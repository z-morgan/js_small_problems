/*
function takes a string of words, and returns an object, where the keys are the number of letters in a word
and the values are the number of words of that size that appear in the sentence.

input: string
return: object

- a word is any sequence of characters delimted by a space.
- since an object is not an ordered collection, the order of properties is not important
- if an empty string is passed in, return an empty object. (no properties)

D: array and object?

A:
create a new object (result)
split the string into an array of words
iterate through the array, and for each element:
  get the length of the string element
  if a key with that length exists on the object, increment it by 1
  otherwise, create it with a value of 1
return the object

create a new object
create a length variable set to 0
iterate through the characters in the string, and for each:
  if the character is not a space,
    increment length by 1 and continue
  if it is,
    see if a property with the key `length` exists in the object
      if it does, increment it by 1
      otherwise, create it with a value of 1
    re-assign `length` to 0
return the object
*/

function wordSizes(sentence) {
  if (sentence.length === 0) return {};

  const counts = {};
  sentence.split(' ').forEach(word => {
    let length = word.length;
    counts[length] ? counts[length] += 1 : counts[length] = 1;
  })
  return counts;
}

// function wordSizes(sentence) {
//   if (sentence.length === 0) return {};

//   const counts = {};
//   let length = 0;
//   for (let char of (sentence + ' ')) {
//     if (char !== ' ') {
//       length += 1;
//     } else {
//       counts[length] ? counts[length] += 1 : counts[length] = 1;
//       length = 0;
//     }
//   }
//   return counts;
// }

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}