// JS CONSTRUCTORS & PROTOTYPES
console.log("JS Constructors & prototypes");

// Write down the name, email, visitTime, phone, of all the guests that are visiting today

const guest1 = {
  name: "hindreen",
  email: "hindreen@gm.ca",
  visitTime: "10:30am",
  phone: "777 777 7777",
  printGuest: function() {
    console.log("this: ", this);
    console.log(`${this.name} visited us at ${this.visitTime}`);
  }
};

const guest2 = {
  name: "Alan",
  email: "alan@gm.ca",
  visitTime: "10:35am",
  phone: "777 777 7788",
  printGuest: function() {
    console.log(`${this.name} visited us at ${this.visitTime}`);
  }
};

// .
// .
// .

const guest100 = {
  name: "Roman",
  email: "roman@gm.ca",
  visitTime: "10:55am",
  phone: "777 777 7789",
  printGuest: function() {
    console.log(`${this.name} visited us at ${this.visitTime}`);
  }
};

// Name a constructor function starting with an upper case letter (convention)
function Guest(name, email, visitTime, phone) {
  console.log("this inside the constructor function: ", this);
  // 'this' keyword is dynamic, it refers to the instance that uses Guest constructor
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.visitTime = visitTime;
  // this.printGuest = function() {
  //   console.log(`${this.name} visited us at ${this.visitTime}`);
  // };
}

// Let's move printGuest method into the Guest prototype
Guest.prototype.printGuest = function() {
  console.log(`${this.name} visited us at ${this.visitTime}`);
};

// Guest.prototype === g1.__proto__; // true which means that (g1, and g2) instances has access to the prototype of Guest constructor through __proto__

// when use constructor function, make sure always use 'new' keyword to generate instances of those functions
const g1 = new Guest("Hindreen", "hindreen@gm.ca", "10:30am", "777 777 7777");
const g2 = new Guest("Alan", "alan@gm.ca", "10:35am", "777 777 7788");

// Arrow functions can not be constructors
const Person = (name, age, occupation) => {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
};

// const p1 = new Person("Max", 23, "Engineer");
// Uncaught TypeError: Person is not a constructor

if (false) {
  // Demo: Counter
  const counter = {
    count: 0,
    //   set: function(n) {
    //       this.count = n;
    //   }
    set(n) {
      this.count = n;
    },

    inc() {
      this.count += 1;
    },

    dec() {
      this.count -= 1;
    },

    now() {
      return this.count;
    }
  };

  // configurable counter
  const counter2 = {
    count: 0,
    step: 1,
    //   set: function(n) {
    //       this.count = n;
    //   }
    set(n) {
      this.count = n;
    },

    inc() {
      this.count += this.step;
    },

    dec() {
      this.count -= this.step;
    },

    now() {
      return this.count;
    },

    setStep(n) {
      this.step = n;
    }
  };

  counter2.setStep(10);
  counter2.inc(); // increment counter2 by 10
  counter2.inc(); // increment counter2 by 10
  counter2.dec(); // decrement counter2 by 10
  counter2.now(); // returns the current count value which is 10
}

// Exercise: Chainable counter3
const counter = {
  count: 0,
  step: 1,
  set(n) {
    this.count = n;
    return this; // this is refering to counter object here
  },

  inc() {
    this.count += this.step;
    return this; // this is refering to counter object here
  },

  dec() {
    this.count -= this.step;
    return this; // this is refering to counter object here
  },

  now() {
    return this.count;
  },

  setStep(n) {
    this.step = n;
    return this; // this is refering to counter object here
  }
};

// Counter Constructor
function Counter(count, step) {
  this.count = count || 0;
  this.step = step || 1;

  this.set = function(n) {
    this.count = n;
    return this; // this is refering to counter object here
  };

  this.inc = function() {
    this.count += this.step;
    return this; // this is refering to counter object here
  };

  this.dec = function() {
    this.count -= this.step;
    return this; // this is refering to counter object here
  };

  this.now = function() {
    return this.count;
  };

  this.setStep = function(n) {
    this.step = n;
    return this; // this is refering to counter object here
  };
}

const defaultCounter = new Counter();
const myCounter = new Counter(19, 3);

// Prototypical Counter

function PrototypicalCounter(count, step) {
  this.count = count || 0;
  this.step = step || 1;
}

PrototypicalCounter.prototype.set = function(n) {
  this.count = n;
  return this; // this is refering to counter object here
};

PrototypicalCounter.prototype.inc = function() {
  this.count += this.step;
  return this; // this is refering to counter object here
};

PrototypicalCounter.prototype.dec = function() {
  this.count -= this.step;
  return this; // this is refering to counter object here
};

PrototypicalCounter.prototype.now = function() {
  return this.count;
};

PrototypicalCounter.prototype.setStep = function(n) {
  this.step = n;
  return this; // this is refering to counter object here
};

const pCounterDefault = new PrototypicalCounter();
const pCounterCustom = new PrototypicalCounter();

// I N H E R I T A N C E
// Dogo constructor
if (false) {
  function Doggo(name, age) {
    this.name = name;
    this.age = age;
  }

  // Let's teach all dogos to bark using Dogo's prototype
  // Doggo is a base(parent) class to DoggoFigher and you cannot do a two way inheritance
  Doggo.prototype.bark = function() {
    console.log(`${this.name} barks`);
  };

  Doggo.prototype.sleep = function() {
    console.log(`${this.name} sleeps Zzzzz....`);
  };

  const river = new Doggo("river", 8);
  river.bark(); // river barks

  Object.getPrototypeOf(river); // this will give us the Dogo prototype

  Object.getPrototypeOf(river) === Doggo.prototype; // true

  function DoggoFighter(name, age, specialAbility) {
    this.name = name;
    this.age = age;
    this.specialAbility = specialAbility;
  }

  // DoggoFighter is a sub(derive) class to Doggo
  DoggoFighter.prototype.fly = function() {
    console.log(`${this.name} flies`);
  };

  const pixy = new DoggoFighter("Pixy", 6, "fly");

  Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype);

  // Another Inheritance example that makes sense more in real life
  function Shape(name) {
    this.name = name;
  }

  Shape.prototype.draw = function() {
    console.log(`draw a ${this.name}`);
  };

  function Circle(name, diameter, radius) {
    this.name = name;
    this.diameter = diameter;
    this.radius = radius;
  }

  Circle.prototype.area = function() {
    console.log(`${Math.PI * this.radius ** 2}`);
  };

  Circle.prototype.draw = function() {
    console.log(`draw a ${this.name}`);
  };

  function Rectangle(name, width, height) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  Rectangle.prototype.area = function() {
    console.log(`${this.width * this.height}`);
  };

  Object.setPrototypeOf(Circle.prototype, Shape.prototype);
  Object.setPrototypeOf(Rectangle.prototype, Shape.prototype);

  const c1 = new Circle("small nice circle", 10, 5);
  const r1 = new Rectangle("neat rectangle", 10, 8);
}
// C L A S S E S

class Doggo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(`${this.name} barks`);
  }

  sleep() {
    console.log(`${this.name} sleeps Zzzzz....`);
  }
}

const river = new Doggo("river", 8);

class DoggoFighter extends Doggo {
  constructor(name, age, specialAbility) {
    //   super refers to the Doggo constructor
    super();
    this.name = name;
    this.age = age;
    this.specialAbility = specialAbility;
  }

  fly() {
    console.log(`${this.name} flies`);
  }

  bark() {
    console.log(`${this.name} barks inside the DoggoFighter class`);
  }
}

const pixy = new DoggoFighter("Pixy", 6, "fly");

pixy.bark();
// this will look inside the DoggoFighter prototype if it finds bark method then it runs it
// if doesn't find it then it will look into the parent class (Doggo) prototype if it finds bark method there,
// it runs it otherwise, it will go one more level to look inside the global Object prototype if it finds bark method there,
// it runs it otherwise it will complain and says (Uncaught TypeError: pixy.bark is not a function)

// Move Shape, Circle, and Rectangle constructors into class syntax
class Shape {
  constructor(name) {
    this.name = name;
  }

  draw() {
    console.log(`draw a ${this.name}`);
  }
}

class Circle extends Shape {
  constructor(name, diameter, radius) {
    super();
    this.name = name;
    this.diameter = diameter;
    this.radius = radius;
  }

  area() {
    console.log(`${Math.PI * this.radius ** 2}`);
  }

  draw() {
    console.log(`draw a ${this.name}`);
  }
}

function Rectangle(name, width, height) {
  this.name = name;
  this.height = height;
  this.width = width;
}

Rectangle.prototype.area = function() {
  console.log(`${this.width * this.height}`);
};


class Rectangle extends Shape {
    constructor(name, width, height) {
        super();
        this.name = name;
        this.height = height;
        this.width = width;
    }

    area() {
        console.log(`${this.width * this.height}`);
    }

}