// Array methods
// methods are functions that belong to a `object`. We will be going over a bunch of Array methods

// [].push();
// used to add stuff to the end of an array
const arrayOne = [1,2,3];
arrayOne.push(4); // this will add 4 to `arrayOne`
console.log(arrayOne); // [1, 2, 3, 4];

// you can push multiple things at once by adding addtional arguments to the .push method
arrayOne.push(5,6,7,8);
console.log(arrayOne);

// [].pop()
// used to take something from the end of an array
// it will also mutate(change) the original array

const arrayTwo = [1,2,3,4];
arrayTwo.pop(); // this will return 4;
console.log(arrayTwo); // [1,2,3];

// [].shift()
// like .pop() but it will remove from the front of an array instead

const arrayThree = [1,2,3,4];
arrayThree.shift();
console.log(arrayThree);

// [].unshift()
// like push but it will add to the beginning of an array

const arrayFour = [1,2,3,4];
console.log(arrayFour.unshift(-2, -1, 0));
console.log(arrayFour);

// [].slice()
// is used to create a new array from an existing array's elements
// it takes in two arguments
// 1) index of where you want to start the new array from
// 2) index of where you want to end the new array

const animals = ["dog", "elephants", "tiger", "lion", "cheeta", "puma"];

// I want a new array with only "tiger" and "lion"
console.log(animals.slice(2,4));

// Slice returns a new array. So the existing array does not get mutated
console.log(animals);

// [].splice
// used to insert or remove elements from an array
// Accepts 3+ arguments:
// 1) starting index
// 2) number of elements to remove
// 3+) values to insert

const cities = ["Sydney", "Cuiaba", "Karachi", "Maldivs", "Vancouver"];
cities.splice(2, 1, "Jalandhar");
console.log(cities);

// [].join()
// used to combine all the elements of an array into a string
// recieves 1 string as an argument
// elements will be joined seperated by this string

const javascriptThings = [1, "be", function name(e) { console.log('hello')}, []];
console.log(javascriptThings.join("|"));

// [].includes()
// Will check if an array contains a value
// recieves 2 arguments
// 1) value to check for
// 2) the starting index (where to start looking)

const pets = ["dog", "betta", "bunny", "cat", "horse", "lion"];
// check for "cat"
console.log(pets.includes("cat"));

// start at index 4 check for "cat"
console.log(pets.includes("cat",4));

// [].forEach(function);
// used to do something for every element within an array
// takes in a function as an argument
// the function that gets passed in has its own 3 arguemnts:
// 1) current element / current value
// 2) index of the current element
// 3) the entire array being traversed

const numbers = [1,2,3,4,5];
numbers.forEach(function(val, i, arr) {
  console.log(val * 2);
});

// [].find()
// used to find an element within an array based on a testing function
// recievs a function as an argument
// that function has 3 arguments
// 1) current element
// 2) index
// 3) array itself

const primeNumbers = [1,3,5,7,11,13,17,19,23,29];
const greaterThan20 = primeNumbers.find(function(val, i, arr) {
  return val > 20;
})
console.log(greaterThan20);

// [].findIndex()
// like find but returns the index of the element which passes the test function instead of the value

// const primeNumbers = [1,3,5,7,11,13,17,19,23,29];
// const greaterThan20 = primeNumbers.findIndex(function(val, i, arr) {
//   return val > 20;
// })
// console.log(greaterThan20);

// [].filter()
// Will return a new array which passes the filter function
// accepts a function (callback) as a parameter
// this function has 3 arguments
// 1) value
// 2) index
// 3) original array

const primeNumbersTwo = [1,2,5,7,11,13,"17","19","23"];
console.log(
  primeNumbersTwo.filter(function(val, i, arr) {
    if (typeof val === 'string') {
      return true;
    }
  })
)

// [].map will return a new array with values returned from the results of a function
// it takes a function in as a argument
// this function has 3 arguments
// 1) value
// 2) index
// 3) original array

const ages = [3, 6, 8, 14];
const dogAge = ages.map(function(val, index, arr) {
  return val * 7;
});
console.log(dogAge);
console.log(ages);