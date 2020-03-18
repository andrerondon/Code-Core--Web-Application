// JS Functions:
// A container for a piece of code that can be executed whenever
// The arguments are the values that are passed in to a 
// function when called/invoked 
// The parameters are the values within the function's code
// when defined
// But arguments/parameters are usually interchangable

// Function syntax:
// Function declaration/statement:
function functionName(param1, param2) {
    // code and body of the function
    return // expression
  }
  
  // Function expression
  // A function without a name is called an anonmyous function
  const anotherFunction = function(param1, param2) {
    // code
    return // expression
  }
  
  // Arrow function (ES6+)
  const arrow = (param1, param2) => {
    // code 
    return // expression
  }
  
  // Invoke/call a function:
  arrow(1, 2)
  
  // Save a returned value to a variable
  let a = arrow(1, 2)
  
  // If you don't have a return statement, the function will return undefined when called
  function returnUndefined() {
    // this will return undefined
  }
  
  // A higher order function is a function that either:
  // - takes in a function as a parameter
  // - returns a function
  // functions are first-class, they can be passed around as values
  
  // runThree
  // func is a function that is passed in as a parameter
  // it is a callback
  const runThree = func => {
    func()
    func()
    func()
  }
  
  // Write a function 'call' which takes in a number and a function as parameters
  // it should return the result of callin the function on the number
  
  // const doubleIt = function (x) {
  //   return 2 * x;
  // };
  // call(5, doubleIt); // => 10
  
  function call(num, func) {
    return func(num)
  }
  