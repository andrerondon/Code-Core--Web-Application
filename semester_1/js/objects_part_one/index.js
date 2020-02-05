// JS: Objects
// Objects are another base type in javascript
// They are records that hold data using key value pairs
// Very useful for storing information which is related to each other.

// example object

const emptyObject = {};

const dogOne = {
  name: 'Niki',
  breed: 'shnowzer',
  age: 14,
  owners: [ 'andre', 'priscila' ]
}

const dogTwo = {
  name: 'Ralph',
  breed: 'yorkie',
  age: 2,
  owners: [ 'brandon', 'nobody' ],
}



// Selecting key's of Objects
// Two ways of selecting stuff from objects
// 1) Square bracket notation (like we use in arrays)
// 2) Dot notation

// Square bracket notation:
dogOne["name"]; // this will select the value of key "name" in `dog` object
dogTwo["name"]; // returns "Ralph"
dogTwo[1]; // undefined because `dogTwo` does not have a key of `1`

// Dot Notation:
dogOne.name;
dogTwo.name;

// Use square bracket notation whenever you want to dynamically select a from a object


// adding key values to objects

// select the key first and then assign it a value
dogOne["favouriteToys"] = ["ball", "water"];
dogOne.fullName = "Niki Rondon";

// nested Object

const Andre = {
  name: "Andre",
  friend: {
    name: "dienal",
    friend: {
      name: "bobby"
    }
  }
}

Andre.friend.friend.name // returns bobby
Andre.friend.friend.friend // returns undefined
// Andre.freind.friend.friend.friend // this throws an error because we try to do `undefined.friend`

const fruit = {
  name: "apple",
  sugar: 250,
  color: "red",
}

console.log(fruit.sugar) // 250;
console.log(fruit.sugar.first) // undefined;
// console.log(fruit.sugar.first.second) // throws error;
if (fruit.sugar.first) {
  const second = fruit.sugar.first.second;
}

// deleting values from objects
const car = {
  passengers: 4,
  topSpeed: 200,
  hp: 300,
  smell: 'dirty',
  owner: "Andre",
  model: "ferarri"
}

console.log(car);
delete car.smell;
console.log(car);

// How to check if a object has a key
// We use the `hasOwnProperty` method

console.log(car.hasOwnProperty("owner"));
console.log(car.hasOwnProperty("hp"));

// Looping over objects
// for in loop

for (let x in car) {
  console.log(`${x} | ${car[x]}`);
  // console.log(key);
  // console.log(car[key]);
}

// Object.keys()
// Returns an array which contains all the keys of a object
console.log(Object.keys(car))
const carKeys = Object.keys(car);
for (let i = 0; i < carKeys.length; i++) {
  console.log(car[carKeys[i]]);
}