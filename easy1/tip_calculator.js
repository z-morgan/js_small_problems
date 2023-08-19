let RLS = require('readline-sync');

let billTotal = parseFloat(RLS.question('What is the bill? '));
let tipRate = parseFloat(RLS.question('What is the tip percentage? '));

let tip = billTotal * (tipRate / 100);
let total = billTotal + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);