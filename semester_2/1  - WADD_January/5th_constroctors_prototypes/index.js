// JS Constructors and Prototypes

// Write down the name, email, visitTme, phone, of all the guests that are visiting today
// If we don't use constructors, we would have to create each guest object manually:

const guest1 = {
    first_name: "Jane",
    last_name: "Doe",
    phone: "604-999-9999",
    email: "jane.doe@gmail.com",
    address: "123 Rose Street",
    visitReason: "Regular Checkup",
  }
  
  const guest2 = {
    first_name: "John",
    last_name: "Lahm",
    phone: "604-999-8888",
    email: "john.lahm@gmail.com",
    address: "123 Heaven Street",
    visitReason: "Regular Checkup",
  }
  
  // ...
  // ...
  // ...
  
  const guest100 = {
    first_name: "James",
    last_name: "Smith",
    phone: "604-999-7777",
    email: "james.smith@gmail.com",
    address: "123 Gaikoz Street",
    visitReason: "Regular Checkup",
  }
  
  // With constructors, we can create guest instances without repeating property names
  // This constructor is like a blueprint for every guest
  // The constructor function name is PascalCase by convention
  function Guest(first_name, last_name, phone, email, address, visitReason) {
    // 'this' is dynamic, it refers to the instance that uses Guest constructor
    console.log("this:", this) 
  
    // Behind the scenes, the 'new' keyword sets 'this' to an object 
    // with the prototype of Guest.prototype:
    // const this = Object.create(Guest.prototype)
  
    this.first_name = first_name
    this.last_name = last_name
    this.phone = phone
    this.email = email
    this.address = address
    this.visitReason = visitReason
    // this.printGuest = function() {
    //   console.log(`${this.first_name} ${this.last_name} visited us for a ${this.visitReason}`)
    // }
  
    // Constructors are like regular functions
    // They can return values when called without the 'new' keyword
    return "I make guest objects"
  
    // 'new' would return that object 'this', 
    // regardless of whether we have a return statement or not
    // return this
  }
  
  // Use the 'new' keyword with constructors to generate instances
  const guest3 = new Guest(
    "Anson", 
    "Lam", 
    "778-777-7777", 
    "anson.lam@gmail.com", 
    "123 Heather Street", 
    "Reg checkup"
  )
  
  // Arrow functions cannot be constructors
  const Person = (name, age) => {
    this.name = name
    this.age = age
  }
  
  // const person1 = new Person("Don", 19)
  // Uncaught TypeError, Person is not a constructor
  
  // Guest.prototype === guest3.__proto__ returns true which means that 
  // all guest instances have access to the prototype of 
  // the Guest constructor through __proto__
  // Let's move the printGuest method into the Guest prototype
  Guest.prototype.printGuest = function() {
    console.log(`${this.first_name} ${this.last_name} visited us for a ${this.visitReason}`)
  }
  Guest.prototype.printEmail = function(){
    console.log(this.email)
  }
  
  // Demo: Counter
  const counter = {
    currentCount: 0,
    set(n) {
      this.currentCount = n
    },
    inc() {
      this.currentCount += 1
    },
    dec() {
      this.currentCount -= 1
    },
    now() {
      return this.currentCount
    }
  }
  
  // Counter Constructor
  function Counter(currentCount = 0) {
    this.currentCount = currentCount
  
    this.set = function(n) {
      this.currentCount = n
    }
    this.inc = function() {
      this.currentCount += 1
    }
    this.dec = function() {
      this.currentCount -= 1
    }
    this.now = function() {
      return this.currentCount
    }
  }
  
  const counter1 = new Counter(5)
  
  // Prototypical Counter Constructor
  function PrototypicalCounter(currentCount = 0) {
    this.currentCount = currentCount
  }
  
  PrototypicalCounter.prototype.set = function(n) {
    this.currentCount = n
  }
  
  PrototypicalCounter.prototype.inc = function() {
    this.currentCount += 1
  }
  
  PrototypicalCounter.prototype.dec = function() {
    this.currentCount -= 1
  }
  
  PrototypicalCounter.prototype.now = function() {
    return this.currentCount
  }
  
  const protypicalCounter1 = new PrototypicalCounter(10)
  


// Inheriance


function Mammal(name) {
  this.name = name
}
Mammal.prototype.print = function() {
  console.log(`I am a mammal: ${this.name}`)
}
function Doggo(name) {
  this.name = name
}
Doggo.prototype.print = function() {
  console.log(`I am a doggo: ${this.name}`)
}
function Husky(name) {
  this.name = name
}
Husky.prototype.print = function() {
  console.log(`I am a husky: ${this.name}`)
}

Object.setPrototypeOf(Doggo.prototype, Mammal.prototype)
Object.setPrototypeOf(Husky.prototype, Doggo.prototype)


////////////// 


function Vehicle(make, model, speed, fuelAmount, color) {
  this.make = make
  this.model = model
  this.speed = speed
  this.fuelAmount = fuelAmount
  this.color = color
}

Vehicle.prototype.print = function() {
  return `I am a Vehicle nd my standard speed is ${this.speed} and I am ${this.color}`
}

const vehicle1 = new Vehicle("Honda", "Civic", 220, "50L", "blue")

function Car(make, model, speed, fuelAmount, color) {
  this.make = make
  this.model = model
  this.speed = speed
  this.fuelAmount = fuelAmount
  this.color = color
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype)

const car1 = new Car("Acura", "TSX", 280, "45L", "red")

Car.prototype.print = function() {
  return `I am a ${this.make} ${this.model}`
}

//////////////

function Bus(make, model, speed, fuelAmount, color) {
  this.make = make
  this.model = model
  this.speed = speed
  this.fuelAmount = fuelAmount
  this.color = color
}

Object.setPrototypeOf(Bus.prototype, Vehicle.prototype)

const bus1 = new Bus("Tesla_bus", "Tesla", 500, "I'm Eletric", "Silver")

Bus.prototype.print = function() {
  return `I am a ${this.make} ${this.model}`
}


console.log(bus1);
