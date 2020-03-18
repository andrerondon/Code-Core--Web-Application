// JS Arrays:
// Arrays are an ordered collection of data

// Use square brackets [] to define an array
// Each element is separated by a comma
[1, 2, 'a string', true, {}]

// You can also nest arrays:
[1, [2, [3, [4, [5, 6]]]]]

// This outer array only has 2 elements
[
  1, 
  [2,[3, [4, [5, 6]]]]
]

// Ways to work with arrays:
const arr = [1, 2, 3, 4, 5]
arr.length // 5
arr[0] // 1
// Unlike strings, you reassign an index to a different element with []
arr[4] = 10
arr // [1, 2, 3, 4, 10]
arr[4] = 5

// Append elements:
// .push() appends values/elements to the end of the array
arr.push(6, 7) // returns 7 (the new array length)
arr // [1, 2, 3, 4, 5, 6, 7]

// Remove last element:
// .pop() removes the last element of the array
// returns that element
arr.pop() // returns 7
arr // [1, 2, 3, 4, 5, 6]

// Remove the first element:
// .shift() removes first element of the array
// return that element
arr.shift() // return 1
arr // [2, 3, 4, 5, 6]

// Add to the beginning of an array
// .unshift() adds elements to the beginning of the array
// returns the new array length
arr.unshift(0, 1) // returns 7
arr // [0, 1, 2, 3, 4, 5, 6]

// .slice() returns a new array as a portion of the array it is called on
// arr.slice(index1, index2)
// index1: the beginning index of the new array (inclusive)
// index2: the end of the new array (exclusive)
arr.slice(0, 3) // [0, 1, 2]

// slice() does not mutate the array that it's called on
arr // [0, 1, 2, 3, 4, 5, 6]

// .splice() mutates the array
// arr.splice(index1, deleteCount)
// index1: The index to start
// deleteCount: The number of elements to delete/change
// returns a new array of the deleted elements
arr.splice(1, 3) // returns [1, 2, 3]
arr // [0, 4, 5, 6]

// join() (array method) joins together all elements in an array as a string
