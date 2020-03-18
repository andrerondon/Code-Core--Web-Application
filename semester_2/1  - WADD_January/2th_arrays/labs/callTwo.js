// Lab - Call Two
// Write a function named callTwo which takes a number and two functions as parameters, and returns the result of calling the two functions on the number.

const doubleIt = function (x) {
 return 2 * x;
}

const addOne = function(x) {
  return x + 1;
}

// Write a function so you can use:
function callTwo(num, func1, func2){
    return func2(func1(num))
}
console.log(callTwo(5, doubleIt, addOne));// => 11);




// function call(num, func) {
//     return func(num)
//   }
  
//   console.log(call(8,addOne))