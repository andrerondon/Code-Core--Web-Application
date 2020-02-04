// OOP Concepts
// 1. Encapsulation
// Suppose we have a function to calculate monthly expenses on a daily base

const food = 25;
const transportation = 9;
const drinks = 3;
const rent = 40;
const otherExpenses = 10;

function calculateMonthlyExpenses(
  food,
  transportation,
  drinks,
  rent,
  otherExpenses
) {
  return (food + transportation + drinks + rent + otherExpenses) * 30;
}

console.log(
  calculateMonthlyExpenses(food, transportation, drinks, rent, otherExpenses)
);

// The above example is the procedural implementation which variables are on one side
// and functions are on one side so they are decupled, now let's look at the object
// oriented programming way and encapsulate it

const expenses = {
  food: 25,
  transportation: 9,
  rent: 40,
  drinks: 3,
  otherExpenses: 10,
  calculateMonthlyExpenses: function() {
    return (
      (this.food +
        this.transportation +
        this.drinks +
        this.rent +
        this.otherExpenses) *
      30
    );
  }
};

console.log(expenses.calculateMonthlyExpenses());

// 2. Abstraction
function Vehicle() {
  throw new Error("Cannot create an instance of abstract class");
}

Vehicle.prototype.drive = function() {
  return `Driving ${this.make} ${this.model}`;
};

// Now if we try to create an instace of vehicle class, we will get an error
// const v1 = new Vehicle("Range Rover");
// Uncaught Error: Cannot create an instance of abstract class at new Vehicle

// Now let's create a Car class and make it inherit from Vehicle class
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
// Now we can create an instance of car and access properties and method in Vehicle
// but, we can't create an instance of Vehicle and that's Abstraction implementation

const c1 = new Car("Range Rover", 2020);
// Car { make: "Range Rover", model: 2020 }
c1.drive(); // Driving Range Rover 2020

// 3. Polymorphism
// Base (master) class
class Shape {
  draw() {
    return "Draw a Shape";
  }
}

// Derived (sub) classes
class Circle extends Shape {
  constructor() {
    super();
  }
  draw() {
    return "Draw a Circle";
  }
}

class Square extends Shape {
  constructor() {
    super();
  }
  draw() {
    return "Draw a Square";
  }
}

class Rectangle extends Shape {
  constructor() {
    super();
  }
}

const circle = new Circle();
const square = new Square();
const rectangle = new Rectangle();

circle.draw(); // Draw a Circle
square.draw(); // Draw a Square
rectangle.draw(); // Draw a Shape


/////
