/**
 * A: 
 * split into array of words
 *  transform the words:
 *    if the words has 5 or mor chars, 
 *      reverse the characters
 *    else 
 *      don't tranform
 * join the words
 */

const reverseWords = function (forward) {
  const transform = function transform(word) {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }

    return word;
  };

  return forward.split(' ').map(transform).join(' ');
};

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"