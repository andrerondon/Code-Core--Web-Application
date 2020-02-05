const dog_1 = {
    age: 10,
    firstName: 'Benji',
    lastName: 'Burlybottom',
    toys: [
      'Amazon Deliver Box',
      'Pork Leg',
      'Rubber Bunny',
      'Pink Torn Bear',
    ]
  }
  
  // const dog_2 = Object.assign({}, dog_1);
  // console.log(dog_2);
  
  // constructor functions are used to create objects, kind of like a template
  function Dog(name, age) {
    // the `this` keyword refers to the current object being built
    // this: {}
    this.name = name;
    // this: {name: name}
    this.age = age;
    // this: {name: name, age: age}
    this.toys = 'bone'
  
  
  }
  
  // must use new keyword if we want to use a function as a constructor
  
  const sonicSam = new Dog('Sonic', 5); // {name: 'Sonic', age: 5}
  console.log(sonicSam)
  const toxicTim = new Dog('Tim', 20);
  toxicTim.legs = 4;
  console.log(toxicTim)