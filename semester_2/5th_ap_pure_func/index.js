
// PURE FINCTION

// test ejejjeje 



const two = 2;

// this is a pure function
// if we give it the same input we can always expect the same output
// it does not MUTATE anything outside of it's scope
function double(n) {
  return n * 2;
}

// console.log(double(two));
// console.log(two);





const numbers = [1,2,3,4,5];
// non-pure
function doubleAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2
  }
  return arr;
}

// pure doubleAll
function doubleAll(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }
  return newArray;
}

// pure function using map
function doubleAll(arr) {
  return arr.map(element => element * 2);
}

// the main way we prevent mutation is by copying the array/object

// ways to copy an array

// spread operator (...)
function doubeAll(arr) {
  const arrCopy = [...arr]; // copies all the elements of arr into arrCopy
  for (let i = 0; i < arrCopy.length; i++) {
    arrCopy[i] *= 2
  }
  return arrCopy;
}

// Object.assign([], arr)
function doubleAll(arr) {
  const arrCopy = Object.assign([], arr);
  for (let i = 0; i < arrCopy.length; i++) {
    arrCopy[i] *= 2
  }
  return arrCopy;
}

// Shallow copy vs Deep Copy
// All the methods JavaScript used to create/copy arrays/objects ONLY shallow copy... meaning only the first level is copied

const d2Array = [[1,2,3], [4,5,6]];
const arrCopy = [...d2Array];
arrCopy[0][0] = 'string';
console.log(arrCopy);
console.log(d2Array);

const brandon = {
  name: 'brandon',
  talk: function() {
    console.log('hello')
  },
  friend: {
    name: 'andre',
    friend: {
      name: 'sandeep',
    }
  }
}
// const brandonCopy = {...brandon};
// brandonCopy.name = 'andy';
// brandonCopy.friend.name = 'steve';
// console.log(brandon);
// console.log(brandonCopy);

// If we want to DeepCopy we have a couple tricks we can use

// 1) turn the object into JSON and then turn the JSON back into an object
const brandonCopyJSON = JSON.stringify(brandon);
// console.log(brandonCopyJSON);
const brandonCopy = JSON.parse(brandonCopyJSON);
// console.log(brandonCopy);
brandonCopy.friend.name = 'steve';
console.log(brandonCopy);
console.log(brandon);

// JSON.stringy method to copy will only allow you to copy JSON properties
// JSON ignores functions, undefined, null, Infinity, NaN, -Infinity
// JSON is only made up of arrays, objects, stings, numbers, booleans

// 2) Doing it manually by creating a function (most likely recursive) that will copy every level <-- you can do this for fun. Don't use it in production

// 3) use a deep clone method from some 3rd party library that has good support. Lodash.cloneDeep(); 

//  test changes