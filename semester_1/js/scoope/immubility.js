// immutability

// a value is considered immutable if it's values can not change
// some immutable values in Javascript are strings, numbers, booleans, null, undefined, NaN

// in this example
let a = 1;
// we are not changing the value of 1 to 2;
a++
// we are changing the varaible a from it's value to value + 1;
console.log(a);

// In this example we are overwriting the variable of b to its value + " are yummy"
let b = 'banana';
b += ' are yummy';
console.log(b);

// we can confirm this behavior by using the const keyword to define varaibles.
// const apple = 'apple';
// apple += ' are not yummy';

const i = 1;
i++

// Some types in javascript are not immutable. We will learn about them in the future. They are Arrays and Objects