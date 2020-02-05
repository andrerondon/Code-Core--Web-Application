// 1. You should never name a constructor function
 // starting with a small case letter (it's a javascript convention)
 function Add(x, y) {
    this.x = x;
    this.y = y;
  }
 
  // Prototype Chain
  // Suppose we are drawing a rectangle
  function Rectangle(length, width) {
    this.length = length;
    this.width = width;
 
    // let's find the rectangle area that we draw
    //   this.area = function() {
    //     return this.length * this.width;
    //   };
  }
 
  const rect1 = new Rectangle(4, 4);
  const rect2 = new Rectangle(3, 5);
 
  // Now if we log rect1 we will see
  // Rectangle {length: 4, width: 4, area: ƒ}
  // rect1.hasOwnProperty('area'); // true
 
  // and if we log rect2 we will see
  // Rectangle {length: 3, width: 5, area: ƒ}
  // rect2.hasOwnProperty('area'); // true
 
  // Now look at Rectangle prototype
  Rectangle.prototype; // {constructor: ƒ}
 
  // and when we check if Rectangle constructor
  // if it has 'area' method
 
  // Rectangle.hasOwnProperty('area'); // false
 
  // As you see 'length' and 'width' are changing
  // in both rect1, and rect2 which makes a complete
  // sense because each rectangle has a different
  // width and length but, they both have the same
  // formula to find their area so, we need to do
  // something to avoid repeating area always when
  // we create an instance of Rectangle
 
  Rectangle.prototype.area = function() {
    return this.length * this.width;
  };
 
  // So above 👆 we moved the 'area' method to Rectangle
  // prototype to avoid re creating it every time we use
  // Rectangle constructor to draw a rectangle. The above line,
  // will create 'area' method once and makes it available for
  // all the instances of Rectangle constructor
 
  // Now rect1, and rect2 instances no longer has 'area'
  // but, if you checkout their __proto__, you will
  // see the 'area' method is available there
 
  console.log("does rect1 has area method: ", rect1.hasOwnProperty("area"));
  console.log("does rect2 has area method: ", rect2.hasOwnProperty("area"));
 
  console.log(
    "does Ractangle prototype has area method: ",
    Rectangle.prototype.hasOwnProperty("area")
  ); // true
 
  // So as you see rect1/rect2.__proto__ = Rectangle.prototype
  // and we can go up more to the chain
  // Rectangle.prototype.__proto__ = Object.prototype
 
  // What is a prototype in a nutshell?
  // By default every function has a property called
  // prototype, this property by default is empty
  // and you can add properties and methods to it
  // and when you create object from this constructor
  // function, they will get (inherit) these properties
  // That's defining this function prototype.
  // like the above example we created 'rect1', and 'rect2' 
  // from 'Rectangle' prototype function
  // The 'rect1' and 'rect2' objects look for the properties
  // inside themselves, if they don't find them, then
  // they'll look up into their constructor function which 
  // is in our case and if they don't find them there then
  // they'll look inside 'Rectangle' constructor prototype 
  // which is global Object constructor and this chain is 
  // available for us through __proto__ property
 