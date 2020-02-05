// Arrays are list like objects. Sort of like sets in math
// to define arrays we use square brackets
const arr = ["a", "b", "c", "d", "e"];

// All elements within an array are indexed
// we can select a element of an array using square bracket notation
const firstElement = arr[0]; // selects the element at index 0 of `arr`
// Arrays have a .length property like strings, which will return the length of array
const lastElement = arr[arr.length - 1]; // returns the very last element of the array

const firstElementUsingString = arr["0"]; // returns the first element;

// Arrays are a special kind of object... We will learn what objects are later.

const elementAtIndex5 = arr[5]; // we tried looking for a 6th element but it doesnt exist we get back `undefined`

// adding to an array
// arrays have a method .push(x) that will add something to the array

// console.log(arr);
// arr.push(10);
// console.log(arr);
// arr.push([]);
// console.log(arr);

// Loop over an array with a for loop
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Selecting elements of an array
// If we want to change a value of an array
arr[0] = 'cat';
console.log(arr);

// Checking if something is an array
// typeof will not work because arrays are just a special object. typeof will just return 'object'
// we need to use Array.isArray() to check if something is an Array.
Array.isArray(arr); // true
Array.isArray("hello"); // false

const colors = ["red", "blue", "green", "yellow"];
// for..of loop will loop over all elements of an array.
for (let element of colors) {
  console.log(element); 
}

// changing all elements of an array
for (let i = 0; i < colors.length; i++) {
  colors[i] = "black";
}
console.log(colors);

// Arrays are mutable

const fruits = ["apple", "banana", "orange"];
// we can change/mutate the value of this array by selecting an element and re-assigning the value.
fruits[0] = "strawberry"; // <-- has mutated the array

// Two-Dimensional Arrays (Arrays within Arrays);

const numbers = [[1,2], [3,4]];

const ticTacToe = [["x", "o", "x"], ["x", "p", "o"], ["o", "x", "o"]];
// select "p" within the tic tac toe game...
ticTacToe[1][1]; // selects "p"

// printing out all elements of a 2d array
for(let i = 0; i < ticTacToe.length; i++) {
  for(let j = 0; j < ticTacToe[i].length; j++) {
    console.log(ticTacToe[i][j]);
  }
}