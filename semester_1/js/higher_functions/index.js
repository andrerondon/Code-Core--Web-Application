// JS Higher Order Functions

console.log("JS: Higer Order Functions");

// functions are a base type
// they can be assigned, re-assigned and passed as
// arguments to other functions
// As well as property values --> There are called methods
const myObj = {
  name: "",
  //   below function is called 'method' because, it's set to a property of an object
  add: function(a, b) {
    return a + b;
  }
};
function testFn() {
  console.log("This is the testFn");
  return 1;
}

const myFnVar = testFn; // We didn't called testFn yet

// Arrow Functions

const sleeping = "Zzzz...";

// This is how you declare arrow functions
const sleep = () => {
  console.log("ZZZzzzzzz....");
};

// an arrow function with one parameter doesn't need paranthesis
// and if the function is one line function, then you don't need
// curly braces and return keyword
const square = x => x ** 2;

// Exercise: To Arrow

const add = (a, b) => a + b;

// const flip = fn => {
//   return function(a, b) {
//     return fn(b, a);
//   };
// };

const flip = fn => (a, b) => fn(b, a);

function fn1() {
  return function fn2() {
    return function fn3() {
      console.log("I am deeply nested in three functions");
    };
  };
}

fn1()()(); // to run the fn3 inside fn2 which is inside fn1

// const V = x => y => z(x)(y);

// function sub(x, y) {
//   console.log(x - y);
// }
const sub = (x, y) => x - y;
// const sub = () => console.log("sub");

const multiply = (x, y) => x * y;

const division = (x, y) => x / y;

function calculate(fn) {
  return function(x, y) {
    return fn(x, y);
  };
}

console.log(calculate(sub)(4, 1));

// Array Methods

// filter

// const arr = [1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10];

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];
// this 👇 will return an array of strings from words array
// which has the number of characters more than 6
const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// find() method

const array1 = [5, 11, 12, 8, 130, 44];

// This 👇 will return the first element that,
// it encounters from array1 that's bigger than 10
const found = array1.find(element => element > 10);

console.log(found);
// expected output: 11

// Reduce

console.log("original array: ", array1);
const sum = array1.reduce((result, current, index, array) => {
  console.log(array); // 👈 this is the array that implement reduce on

  console.log(`index: ${index}`); // 👈 this is the index of the current element
  console.log(`result: ${result}`); // 👈 this is the result at each iteration
  console.log(`current: ${current}`); // 👈 this is the current value
  return result + current;
});

// sort
// array1.sort()
const letters = ["b", "z", "x", "n", "r", "a"];
console.log(letters.sort()); // ["a", "b", "n", "r", "x", "z"]

array1.sort((a, b) => a - b); // 👈 this will sort array1 in ascending order
array1.sort((a, b) => b - a); // 👈 this will sort array1 in descending order

// every
// every goes through an array and tests the condition on every element
// it returns true if the condition is true for every element
// if the condition is not true for at least one element then it returns false
const array2 = [7, 11, 13, 17, 21];
const primeNumbers = array2.every(num => {
  return num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0;
});

// map



const array = [1, 2, 3, 4, 5];

const arrayReduce = array.reduce(function(acc, cur)
{
    return acc + cur
});

console.log(arrayReduce);