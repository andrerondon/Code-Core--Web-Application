// Length of a String (15%):
// Write a function that returns the length of a string. You are not allowed to use the length property of string.

// Hint: Use While loop
function length(string) {
  let length = 0;
  while (string[length] !== undefined) {
    length++;
  }
  return length;
}
// Examples:
console.log(length("apple"))

console.log(length("make"))

console.log(length("a"))

console.log(length(""))

// Bonus:
// Optimize your function in such a way that if it is passed with string, it returns the length of the string. If it is passed with array it should return the length of the array.