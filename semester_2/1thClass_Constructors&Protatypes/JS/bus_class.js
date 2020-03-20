
const n = new NameMe('John', 'Doe');


class Car {
    constructor(make, model, speed, color) {
      this.make = make;
      this.model = model;
      this.speed = speed;
      this.color = color;
    }
  
    accelerate(n) {
      this.speed += n;
    }
  
    deccelerate(n) {
      this.speed -= n;
    }
  }
  
  // bus using class syntax
  
  class Bus extends Car { // extends is inheriting from car
    constructor(make, model, speed, color, wheels) {
      super(make, model, speed, color); // super is calling the constructor of the parent class. In this case it is calling the constructor of Car
      this.wheels = wheels;
    }
  }
  
  const tesla = new Car("model x", "x", 0, "red");
  const teslaBus = new Bus("model bus", "bus", 0, "black", 6);

// exercise: Make a Truck class
// inherits from Car
// has extra properties such as:
// engineType: 'v8', 'v6', 'v12', 'v16'
// fuelType: 'gas', 'diesel', 'electric', 'nuclear', 'hydro'
// honk: function that blows the horn... returns "chooooooooo"

class Truck extends Car {
    constructor(make, model, speed, color, wheels, engineType, fuelType) {
      super(make, model, speed, color);
      this.wheels = wheels;
      this.engineType = engineType;
      this.fuelType = fuelType;
      this.isTransformer = true;
    }
  
    honk() {
      return 'choooooo chooo';
    }
  
    transform() {
      if (this.isTransformer) {
        return 'TRANSFORM';
      }
    }
  } 



const teslaTruck = new Truck("Tesla Truck", "Scanea", 60, "White", 12, "v12", "electric");

console.log(teslaTruck);
