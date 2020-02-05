const argument = process.argv[2];
​
// everything that gets passed into a script is a string
// we can use parseInt to turn number string into a number
const argumentToNumber = parseInt(argument);
​
// typeof operator is used to get the type of a value
// it will always return a string, the string being whatever data type the value is
​
// console.log(typeof 5) // "number"
// console.log(typeof "5") // "string"
// console.log(typeof false) // "boolean"
// console.log(typeof NaN) // "number"
​
// typeof NaN is still considered to have that typeof "number" so we need to account for this edge case by using a LOGICAL AND to check for NaN using isNaN
​
if (typeof argumentToNumber === 'number' && isNaN(argumentToNumber)) {
  console.log('true');
} else {
  console.log('false');
}