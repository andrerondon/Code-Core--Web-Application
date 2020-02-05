// Javascript Booleans

// Booleans are a base type in Javascript just like Strings or Numbers
// They represent values which are either true or false.

// Comparison Operators
// We use comparison operators to create expressions that result in boolean valeu

console.log("" === true);

// Equality Operator `==`
// Used to check if two values have the same value
console.log(1 == 1); // true
console.log(2 == 1); // false
console.log(1 == true); // true

// Inequality Operator `!=`
// Used to check if a value IS NOT the same
console.log(1 != 1); // false
console.log(1 != 2); // is 1 NOT EQUAL to 2... yes its true 1 IS NOT EQUAL to 2

//  Identity Operator `===`
// Used to check if the value and TYPE of the left hand side is same as the value and TYPE of the right hand side
console.log(1 === 1); //true
console.log("1" === 1); //false
console.log(1 === true); //false

// Nonidentity Operator `!==`
// Used to check if the value and Type on the left hand side IS NOT THE SAME as the value and type on the right hand side
console.log(1 !== 1); // false
console.log(1 !== 2); // true
console.log(1 !== true); // true

// expressions need to evaluate first before these operators
const a = 1 + 1; // 2 (this is the Number of 2)
console.log(a === 2)

let b;
console.log(b) // if we try to reference something that is not defined we get back the base type `undefined` this basically means we've tried looking at something that doesn't exist

// Logical AND `&&`

console.log(true && false);
console.log(1 === 1 && false);
console.log(true && true && true && true && false);

// Logical OR `||`
console.log(false || false);
console.log(false || true);
console.log(false || false || false || false || false || true);

// Operator precedece

console.log(1 === 2 || 1 === 1);

console.log(false || true);
console.log(!false || true);

// Use the grouping operator `()` to wrap expressions that you want to evaluate first
const value = !(false || true)
console.log(value);

// Falsey values in javascript

// Certain values within javascript are considered false
// We can check what a value's boolean value is by using the double negation operator `!!`
console.log(!!true);
console.log(!!"hello") // a non empty string is true
console.log(!!"");
console.log(!!0);
console.log(!!1);
console.log(!!NaN);
console.log(!!50);
console.log(!!null);
console.log(!!undefined);