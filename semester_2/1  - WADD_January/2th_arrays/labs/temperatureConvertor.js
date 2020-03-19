// Lab - Temperature Convertor
// Write a function that takes in a temperature in celsius and returns the temperature in Fahrenheit rounded to one decimal point.

// The formula to convert Celsius to Fahrenheit is: F = C * 9/5 + 32

// For example, if the input is 23 the function should return 73.4

// Stretch 1
// Make the function take an array of temperatures and returns the conversion results in an array as well.

// For example, if the input of the function is [23, 26, 30] the function should return [73.4, 78.8, 86]

// Stretch 2
// Make the function take an object of temperatures and returns the conversion results in an object as well.

// For example, if the input of the function is { vancouver: 23, burnaby: 26, seattle: 30 } the function should return { vancouver: 73.4, burnaby: 78.8, seattle: 86 }

// Stretch 3
// Make the function accept any of the options above (number, array or object) and return the appropriate result.

// let c = [23, 26, 30]
// let fahrenheitConverter = function (input){
//     const newArr = []
//     for (let i = 0; i < input.length; i++){
//         newArr.push(([i]*9/5)+ 32)
//     }
//     return newArr
// }
// console.log(fahrenheitConverter(c));

function tempConverter (input) {
  if (typeof input === 'object') {
    for (let key in input) {
      input[key] = input[key] * 9/5 + 32
    }
    return input
  }
  return input * 9/5 + 32
}


// function cityObjects(city, temperature){
//     this.city = city
//     this.temperature = temperature
// }
// console.log(cityObjects);
