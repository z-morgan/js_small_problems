let start = Number(prompt('What is the starting number?'));
let end = Number(prompt('What is the ending number?'));

for (let num = start; num <= end; num += 1) {
  if (num % 2 === 1) {
    console.log(num);
  }
}

