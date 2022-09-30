// for a browser

// let num1 = prompt('Enter the first number: ')
// let num2 = prompt('Enter the second number: ')

// print(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`)
// print(`${num1} - ${num2} = ${num1 - num2}`)
// print(`${num1} * ${num2} = ${num1 * num2}`)
// print(`${num1} / ${num2} = ${parseInt(num1 / num2)}`)
// print(`${num1} % ${num2} = ${num1 % num2}`)
// print(`${num1} ** ${num2} = ${num1 ** num2}`)

// function print(value) {
//   console.log(value);
// }

// node version:

const readlineSync = require("readline-sync");

print("Enter the first number");
let num1 = Number(readlineSync.prompt());

print("Enter the second number");
let num2 = Number(readlineSync.prompt());

print(`${num1} + ${num2} = ${num1 + num2}`)
print(`${num1} - ${num2} = ${num1 - num2}`)
print(`${num1} * ${num2} = ${num1 * num2}`)
print(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`)
print(`${num1} % ${num2} = ${num1 % num2}`)
print(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`)

function print(value) {
  console.log(value);
}








