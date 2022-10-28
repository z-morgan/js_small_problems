/*
given the function from the last exercises, modify it to ignore non-alphabetic characters when 
determining the size of a word.

A:
before determining the length of a word, replace the non-letter chars with empty strings

*/

function wordSizes(sentence) {
  if (sentence.length === 0) return {};

  const counts = {};
  sentence.split(' ').forEach(word => {
    word = word.replace(/[^a-z]/ig, '');
    let length = word.length;
    counts[length] ? counts[length] += 1 : counts[length] = 1;
  })
  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}