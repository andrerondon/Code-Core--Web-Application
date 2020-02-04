const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question();
// is a function that allows us to ask questions in the console
// it accepts two arguments
// 1st is a string to print out (console.log())
// 2nd is a callback function it will execute when it recieves something from the user

let name, age, favouriteColor;

rl.question('What is your name? \n', (answer) => {
  name = answer;
  rl.question('What is your age? \n', (answer) => {
    age = answer;
    rl.question('What is your favourite colour? \n', (answer) => {
      favouriteColor = answer;
      console.log(`Hello ${name}, whose age is ${age}, and favourite color is ${favouriteColor}`);
      rl.close();
    })
  })
})