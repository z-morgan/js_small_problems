// The total value is 15

// The total value is NaN

// The total value is 15

// raises SyntaxError on line 4

// These are the snippets after hoisting:


let counter; // but not initialized to `undefined`
let rate;    // but not initialized to `undefined`

counter = 5;
rate = 3;

function counter(count) {  // raises SyntaxError during creation phase
  // ...
}

console.log('The total value is ' + String(counter * rate));


