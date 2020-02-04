// Polymorphism

function Younguy(name, age, weight) {
    this.name = name
    this.age = age;
    this.weight = weight;
    this.whenyoung = function() {
        return `I'm ${this.name}, with ${this.age} years old, and I'm ${this.weight}kg, because I'm young`;
    }

    this.whenold = function() {
                return `In the future me ${this.name}, will be with ${this.age+30} years old, and I'm going to be ${this.weight+30}kg, because I'm going to be OLD`;
    }
}
// ImOld.prototype = Younguy

// function ImOld(name, age, weight) {
//     this.name = name
//     this.age = age;
//     this.weight = weight;
//     this.whenold = function() {
//         return `In the future me ${this.name}, will be with ${this.age} years old, and I'm going to be ${this.weight}kg, because I'm going to be OLD`;
//     }
// }

// Younguy.prototype = new Younguy();
// ImOld.prototype.constructor = ImOld;


const meyoung = new Younguy("Andre",34, 80);

console.log(meyoung.whenyoung());
console.log(meyoung.whenold());   // this is not true BTW hahaha because i'm not going to gain weight


///////////// by class

// class Younguy{
//     constructor(name, age, weight) {
//         this.name = name
//         this.age = age;
//         this.weight = weight;
//     }
    

//     whenyoung() {
//         return `I'm ${this.name}, with ${this.age} years old, and I'm ${this.weight}kg, because I'm young`;
//     }
   
// }

// class ImOld{
//     constructor(name, age, weight) {
//         this.name = name
//         this.age = age;
//         this.weight = weight;
//     }

//     whenold() {
//         return `In the future me ${this.name}, will be with ${this.age} years old, and I'm going to be ${this.weight}kg, because I'm going to be OLD`;
//     }
   
// }

// const meyoung = new Younguy("Andre",34, 80);
// const meold = new ImOld("Andre Rondon",100, 90);

// console.log(meyoung.whenyoung());
// console.log(meold.whenold()); 