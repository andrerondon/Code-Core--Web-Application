// You are given a complex object that has many deeply nested variables. Create a prototype method on Object, Object#getByPath, that takes a period separated string and traverses the nested object. It returns undefined if it encounters and undefined value at any time.


const obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.'
        }
      }
    }
  };


  obj.prototype.getByPath = function (string){
      if ()

  }

  
  
  // gets value of `name` in value of `person` in `obj`
  obj.getByPath('person.name'); // 'joe'
  
  // gets value of `bio` in value of `history` in value of `person` in `obj`
  obj.getByPath('person.history.bio'); // { funFact: 'I like fishing.' }
  
  //  `homeStreet` doesn't exist, then return `undefined`
  obj.getByPath('person.history.homeStreet'); // undefined
  
  // `animal` doesn't exist, then return `undefined`
  obj.getByPath('person.animal.pet.needNoseAntEater'); // undefined
  
  console.log(obj.person.name);
  