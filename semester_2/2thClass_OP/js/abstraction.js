// Abstraction

  function Person() {
    throw new Error("Cannot create an instance of abstract class");
  }
  
  Person.prototype.who= function() {
    return `You are ${this.name} with ${this.age} years old`;
  };
  

  

  function You(name, age) {
    this.name = name;
    this.age = age;
  }
  
  
  Object.setPrototypeOf(You.prototype, Person.prototype);

  
  const p1 = new You("Andre", 34);

  console.log(p1.who());


  ///     example with this

class You{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
// intance
    who (){
        return `You are ${this.name} with ${this.age} years old`;
    }
   
}

const p1 = new You("Andre", 34);
console.log(p1.who());


  