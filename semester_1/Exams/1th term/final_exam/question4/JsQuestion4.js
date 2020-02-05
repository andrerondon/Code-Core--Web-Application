
function Horses(name, age, weight) {
    this.Name = name;
    this.Age = age;
    this.weight = weight;
    this.Drag = Math.random() * 5;
}

  const lisa = new Horses('Lisa', 25, 10);
  const Jenny = new Horses('Jenny', 15, 5);
  const Jasmine = new Horses('Jasmine', 30, 11);
  const Rose = new Horses('Rose', 23, 8);
  console.log(lisa);
  console.log(Jenny);
  console.log(Jasmine);
  console.log(Rose);


  // Sorry Naveed it was what I could have done