// const logcontry = require('./country.js');
// require accepts a path to a file. It will load in the `module.exports` from that file
// the path is relative

// console.log(logcontry);

// load/import the countries array and log out each country
const countries = require('./country');

countries.forEach((country) => {
  console.log(country)
});

console.log(countries);
