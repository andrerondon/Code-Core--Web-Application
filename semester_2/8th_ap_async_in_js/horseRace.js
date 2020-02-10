const delay = require('./delay');

// Promise.all is a method that accepts an array of Promise objects
// it will execute all the promises in parallel
// when all the promises have <resolved> it will return a thenable with an array of all the resolved values

Promise.all([
  delay(10000, "blue"),
  delay(2000, "red"),
  delay(3000, "green"),
])
  .then(colors => {
    colors.forEach(color => console.log(color));
    // Promise.all returns a thenable that contains an array of all the resolved values
    console.log(colors);
  })


 