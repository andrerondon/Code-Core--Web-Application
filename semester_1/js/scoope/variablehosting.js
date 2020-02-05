// variable declarations are hoisted
// but variable assignments are not
// assignments are expressions that can only be evaluated during runtime
console.log(a); // undefined
console.log(b); // undefined
console.log(c); // undefined

var a = 'a';
var b = 'b';
var c = 'c';

console.log(a); // a
console.log(b); // b
console.log(c); // c


// function declarations get hoisted
console.log(sum(2,5));

function sum(a, b) {
  return a + b;
}

// function expressions need to be evaluated at runtime and therefore are not hoisted.

console.log(add(2,5));
const add = function(a, b) {
  return a + b;
}

// always define variables and functions first before using them to avoid errors due to unevaluated variables