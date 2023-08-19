/* 
given the function `doubler`, write a function which takes only the name of the caller, and returns a function with the 
behavior of doubler, which only requires a number argument (the vale of caller is preset).

A:
given `doubler()`, write `makedoubler()` to take the caller argument. return a function definition, which takes 
a number, and calls `doubler()` with that number, and the value of the caller passed to `makeDoubler()`.
*/




function makeDoubler(caller) {
  return function (number) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  };
}


const doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.