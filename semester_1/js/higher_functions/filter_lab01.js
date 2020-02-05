// Write an higher-order function, filter, from scratch that takes two arguments:

// the first is an array
// the second is a callback that will be called once for every element in the array with 3 arguments:
// the current value of the element
// the current index of the element
// the array itself
// filter returns a new array that only contains elements of provided array where the callback function returns true.

// Usage examples:

// given three functions:
// even returns true if its argument, n, is an even number (false otherwise)
// const even = function (n) { return n % 2 === 0 };
// even returns true if its argument, n, is an odd number (false otherwise)
// const odd = function (n) { return !even(n) };

// creates a function that returns true if its argument is above min
// const above = function (min) {
//   return function (n) {
//     return n > min;
//   }
// }

// repeatedValue returns true if its argument, value, is a value that is repeated within the array, arr, (false otherwise)
// const repeatedValue = function(value, index, arr) {
//   return index !== arr.indexOf(value);
// };

// let arr = [1,2,3,4,5,6];




let arr = [1,2,3,4,5,6];
const even = function (n) { return n % 2 === 0 };
const odd = function (n) { return !even(n) };
const above = function (min) {
    return function (n) {
      return n > min;
    }
};
const repeatedValue = function(value, index, arr) {
    return index !== arr.indexOf(value);
};
function filter(arr, callback) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let result = callback(element,i,arr);
        if(result){
            newArray.push(element);
        }
    }
    return newArray;
}
console.log(filter(arr, even)) // returns 2,4,6
console.log(filter(arr, odd)) // returns 1,3,5
console.log(filter(arr, above(3))) // returns 4,5,6
console.log(filter([1, 2, 3, 2, 3, 4, 5], repeatedValue)); // returns 2,3