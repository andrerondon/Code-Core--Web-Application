/**
Write a function to filter items based on their price
Stretch 1) Allow filtering via tags
Stretch 2) Allow filtering via name

*/

const items = [
  {name: 'bread', price: 2, tags: ['perishable', 'staple']},
  {name: 'cereal', price: 4, tags: ['perishable', 'staple']},
  {name: 'milk Orgaic', price: 15, tags: ['perishable', 'staple', 'organic', 'dairy']},
  {name: 'milk', price: 2, tags: ['perishable', 'staple', 'dairy']},
  {name: 'cheetos', price: 1, tags: ['perishable', 'junk', 'dairy']},
  {name: 'orange juice', price: 4, tags: ['perishable', 'junk', 'vitamin c', 'sugar', 'fruit']},
  {name: 'banana', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
  {name: 'apple', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
]

const filter = (items, properties) => {
  const filtered = []
  for (let i = 0; i < items.length; i++) {
    let match = true
    for (let property in properties) {
      if (property === "tags") {
        for (let tag of properties[property]) {
          if (!items[i].tags.includes(tag)) match = false
        }
      } else if (property === "name"){
        if (!items[i][property].includes(properties[property])) match = false
      } else if (property === "price") {
        if (properties[property] !== items[i][property]) match = false
      }
    }
    if (match) filtered.push(items[i])
  }
  return filtered
}



console.log(filter());
console.log(items());
console.log(filter(items));
console.log(items);


///



