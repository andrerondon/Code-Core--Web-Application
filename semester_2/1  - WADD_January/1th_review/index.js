// Primitive Data Types:
// number
// string
// boolean
// null
// undefined

// Examples of numbers
5
-5
10.242311 
Infinity
-Infinity

// Strings --> a sequence of characters surrounded by "", '', or ``
"This uses double quotes"
'This uses singles\' quotes' // '\' escapes characters
`This uses backticks`

// We can interpolate with backticks
`There are ${3 + 4} students in the room`

// Only backticks can be used for multiline stings
`
  This is
  a multiline 
  string
`

// Get the length of a string
"abc".length // 3

// We can access characters in a string with the bracket notation
"abc"[2] // "c"

// We cannot mutate a string with bracket notation
let s = 'bobbi'
s[4] // 'i'
s[4] = 'y'
s // 'bobbi'

// Booleans
true
false

// Falsy values
0
-0
null
undefined
''
NaN

// Variables:
/* 
  They are a container that holds a value
  You can declatre a varible using const or let

*/

// Syntax is as follows:
// Here we declare and initalize a variable
// {keyword} {variableName} = {value}

// When decalring a variable without a value,
// the space in memory gets assigned but its value is undfined
let helloWorld;
helloWorld // undefined

// Declare a variable that can't be reassigned/rebinded:
const myNumber = 2;
myNumber = 3 // TypeError

// Conventions:
// camelCase for variable names (this is the convention in JS)
const camelCase = 'value'
// snake_case
const snake_case = 100

// Rules for variable names
// * cannot contain spaces
// * must start with a letter, _ or $
// * may contain digits if it's not the starting character
// * are case-senstive 
// * can't be a reserved word

// comparision operators
// < > <= >=

// equality operators
// Double equals (equality) will only compare the value
// because it tries coerce one or both sides to similar types
// == !=

2 == 2 // true
2 != 2 // false
2 == '2' // true

// Strict equality operator
// triple equals will compare the value and the data type
// === !==

2 === 2 // true
2 !== 2 // false
2 === '2' // false
2 !== '2' // true

// Logical operators
// && (and)
// || (or)

// with the && (AND) operator both operands must be true to return true
true && true // true
true && false // false
false && false // false

// with the || (or) operator at least one operand must be true to return true
true || true // true
false || true // true
false || false // false

// The Math object/library that is built into javascript

// Generate a random number
Math.random() // this will return a random number between 0 and 1 (not inclusive of 1)
Math.random() * 100
Math.floor(3.123235345341) // 3
Math.ceil(3.123235345341) // 4

// Generate a random number between 0 and 99
Math.floor(Math.random() * 100)

// Browser dialog:
alert('message')
// displays a message and returns undefined

confirm('do you want to proceed?')
// ask for confirmation and returns true if OK and false if cancel

prompt('what is you name?')
// asks for iput
// returns a string if OK is clicked
// returns null if cancelled

let name = prompt('What is your name?')
alert(`Hello ${name}`)

/*
  A statement performs an action
  An expression produces a value
*/

/* 
  Increment operators
  ++ --
  pre increment/decrement operators
  post increment/decrement operators
*/

let num = 2
num = num + 1 // num = 2 + 1 // num = 3
num += 1 // 4
++num // add 1 to num before returning the new number // 5
num++ // return 5 before adding 1 to it // 5
num // 6

