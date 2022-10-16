// program prompts the user for a length and width in meters
// program then computes and logs the area of the room in sq. meters and sq. feet.

/*
- 1 sq. m === 10.7639 sq. ft

A:
get the input from the user
get the area in meters
conver the area to feet
output both
*/

let RLS = require('readline-sync');

const METERS_TO_FEET = 10.7639;
let units = RLS.question('What units do you prefer? (Enter "meters" or "feet"): ');

let width = RLS.question(`What is the width in ${units}? `);
let length = RLS.question(`What is the length of the room in ${units}? `);

width = parseInt(width, 10);
length = parseInt(length, 10);

let area = width * length;

let otherUnits;
let otherArea;
if (units === 'meters') {
  otherUnits = 'feet';
  otherArea = area * METERS_TO_FEET;
} else if (units === 'feet') {
  otherUnits = 'meters';
  otherArea = area / METERS_TO_FEET;
}

console.log(`The area of the room is ${area.toFixed(1)} \
sq. ${units} (${otherArea.toFixed(1)} sq. ${otherUnits}).`);