/*
write a program which prompts the user for their age, and then prompts them again for 
the age they want to retire at. The program then reports the current year, and 
the year in which they will retire. It also reports how many years of work they have left.

input: strings
displays: strings

- will need to convert strings to numbers to do math
- should get the date from the environment

sample display:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!



D: variables and the Date object.

A:
prompt the user for their age, and store in a variable
validate the input, and re-prompt if inadequete

prompt the user for their retirement age
validate and reprompt

get the date from the environment
store the current year

get the number of work years remaining by subtracting the user's 
  current age from their retirement age

use the years remaining to increment the year variable

report the data using string interpolation
*/

let age;
while (true) {
  age = Number(prompt('What is your age? '));
  if (Number.isInteger(age)) break;
  alert('Invalid input--Please enter an integer.');
}

let retirementAge;
while (true) {
  retirementAge = Number(prompt('What is your desired retirement age? '));
  if (Number.isInteger(retirementAge)) break;
  alert('Invalid input--Please enter an integer.');
}

let year = Date().getFullYear();
let yearsToRetirement = retirementAge - age;
let retirementYear = year + yearsToRetirement;

alert(`It's ${year}. You will retire in ${retirementYear}.\n\
You have only ${yearsToRetirement} years of work to go!`);