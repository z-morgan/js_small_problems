let a = 'hello';

a.toUpperCase();

console.log(a);

// On line 1, a variable `a` is declared, and initialized to the string `'hello'`. On
// line 3, `String.prototype.toUpperCase` is called on `a`, and returns `'HELLO'`, but 
// this value is not used for anything. On line 5, `a` is logged to the console, thus `'hello'`,
// the value which is held in `a` is logged. 

// This code demonstrates that strings are primitives, and so are immutable. Since `a` is never
// reassigned in this code, `a` must still be the value that it was initialized to, regardless
// of what operations are performed with or on it after that.

/*
Also note that on line 3, the string primitive is wrapped by a string object, upon which the 
method is called. This happens implicitly when a method is called on a string primitive.
*/