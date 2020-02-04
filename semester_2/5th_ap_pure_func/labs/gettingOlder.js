

let people = [
    {name:"andre", age : 18},
    {name: "sandeep", age: 55},
]

function happyBirthday (arr) {
    let jsonCopyOfPeople = JSON.stringify(arr);
    copyOfPeople = JSON.parse(jsonCopyOfPeople);
    for (let x = 0; x < copyOfPeople.length; x++) {
      copyOfPeople[x].age += 1;
    }
    return copyOfPeople;
  }

  console.log(happyBirthday(people));
  console.log(people);
  

console.log(JSON.parse(JSON.stringify(people)));


  