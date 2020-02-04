console.log('log from js/bus.js')

function Vehicle(make, model, speed, color) {
  this.make = make;
  this.model = model;
  this.speed = speed;
  this.color = color;
}

Vehicle.prototype.accelerate = function(speed) {
  this.speed += speed;
}

Vehicle.prototype.decelrate = function(speed) {
  this.speed -= speed;
}

function Bus(make, model, speed, color) {
  this.make = make;
  this.model = model;
  this.speed = speed;
  this.color = color;
  // this.wheels = 6; we know all busses will have 6 wheels so we can add this property to the prototype to prevent duplicaiton. This will save a lot of memory
}

Bus.prototype.wheels = 6;

// inheritance the bad way
// anything starting with _ in javascript is meant to be a private variable. You shouldn't use or modify these variables or else you could experience ugly bugs.

// Bus.prototype.__proto__ = Vehicle.prototype;

// inheritance the good way
Object.setPrototypeOf(Bus.prototype, Vehicle.prototype);
