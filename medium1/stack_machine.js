'use strict';

/*
write a function which takes a string, of values and commands, and outputs the console the result of 
  each print command

input: a string of space-delimted digits (representing integer values) and commands
output(console): The current regester value when each PRINT command executes

reqs:
- values will always be digits representing integer Numbers
- commands will always be uppercase words (strings of letters)
- all input strings will be valid (no need to do any validation of input)
- starting stack is empty array
- starting register has value of 0
- all operations which mathematically could produce a decimal should round the result down to the nearest integer

commands:
n : Place a value, n, in the register. Do not modify the stack.
PRINT : Print the register value.
PUSH : Push the register value onto the stack. Leave the value in the register.
POP : Remove the topmost item from the stack and place it in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.

D: array and variable for stack and register
object with methods for commands

A:
creat stack, register, and commands obj.

split the string into an array of values and commands (on spaces)
iterate through the array and for each elemetn:
  if it's a digit:
    re-assign register to digit as Number
  else:
    call given method with top of stack and register as arguments



*/

function minilang(input_msgs) {
  let stack = []
  let register = 0
  let commands = {
    PRINT() {
      console.log(register);
    },
    PUSH() {
      stack.push(register);
    },
    POP() {
      register = stack.pop();
    },
    ADD() {
      register += stack.pop();
    },
    SUB() {
      register -= stack.pop();
    },
    MULT() {
      register *= stack.pop();
    },
    DIV() {
      register = Math.floor(register / stack.pop());
    },
    REMAINDER() {
      register = register % stack.pop();
    },
  };

  input_msgs.split(' ').forEach(msg => {
    if (/[0-9]/.test(msg)) {
      register = Number(msg);
    } else {
      commands[msg]();
    }
  });
}

// tests

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)