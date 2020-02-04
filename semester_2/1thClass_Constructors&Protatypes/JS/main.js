console.log('hello from js/main.js');

// constructor
function Person(firstname, lastname, phone, email, address, visitReason) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.phone = phone;
  this.email = email;
  this.address = address;
  this.visitReason = visitReason;
}

Person.prototype.fullname = function() {
  return this.firstname + this.lastname;
}

// jugraj
const jugraj = new Person("Jugraj", "Singh", 911, "icbc", "765 whitehouse, usa", "making money");


// Mimic animals

function Mammal(name) {
  this.name = name;
  this.bodyParts = ['spine', 'skin'];
  this.layEggs = false;
}

Mammal.prototype.sleep = function() {
  return this.name + ' is sleeping...zzzzz';
}

const teddy = new Mammal("teddy");




// inheritance(what a who is that?)
// 

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  return this.name + ' is barking... woof woof';
}

Dog.prototype.__proto__ = Mammal.prototype;   // what is happeing right here????

const brian = new Dog("Brian");



