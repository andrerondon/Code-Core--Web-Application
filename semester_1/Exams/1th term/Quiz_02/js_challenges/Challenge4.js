// Constructors & Prototypes
// Write a constructor to create a person with the following properties: 1. Name 2. Relationship 3. Age

// Create 5 Objects with the help of constructor like:

// Father: John Mother: Sara

// Child1: Jesica Child2: Silvia Child3: Julie

// Then Create a constructor of a House, this should properties like:

// HeadOfFamily: HouseWife: Children:[]

// Then add a Prototype function which logs: Greetings - a father with the name should greet you List of all Family Members

// John likes to greet you in their House
// House {
//   headOfFamily: Person { name: 'John', age: 45, relationship: 'father' },
//   houseWife: Person { name: 'Sara', age: 30, relationship: 'mother' },
//   children: [
//     Person { name: 'Jesica', age: 3, relationship: 'Child1' },
//     Person { name: 'Silvia', age: 4, relationship: 'Child2' },
//     Person { name: 'Julie', age: 5, relationship: 'Child3' }
//   ]
// }

function familyMembers(name, age, relationship) {
    this.name = name;
    this.age = age;
    this.relationship = relationship;
    
}

  const John = new familyMembers('John', 45, 'Father',);
  const Sara = new familyMembers('Sara', 30, 'Mother',);
  const Jessica = new familyMembers('Jessica', 5, 'Child1',);
  const Silvia = new familyMembers('Silvia ', 3, 'Child2',);
  const Julie = new familyMembers('Julie', 2, 'Child3',);

//   console.log(John);
//   console.log(Sara);
//   console.log(Jessica);
//   console.log(Silvia);
//   console.log(Julie);

function positionFamily(John, Sara, Jessica, Silvia, Julie){
 this.headOfFamily = John,
 this.houseWife = Sara,
 this.children = [Jessica, Silvia, Julie]
}

const house = new positionFamily(John, Sara, Jessica, Silvia, Julie);

console.log(house);
