function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

/*
`arguments` is an array-like object which contains all of the arguments which are passed into a function.
It is available locally to all functions, and it'=s contents are not affected by the 
presence or number of parameters defined for the function. Its contents can be retrieved using the same 
bracket syntax that a standard array uses.

*/