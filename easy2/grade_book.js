/*
90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

function takes three numbers, and returns a letter grade associated
with the following scheme:

A:
use conditional statements 
*/

function getGrade(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let ave = sum / 3;

  if (ave <= 100 && ave >= 90) {
    return 'A';
  } else if (ave < 90 && ave >= 80) {
    return 'B';
  } else if (ave < 80 && ave >= 70) {
    return 'C';
  } else if (ave < 70 && ave >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"