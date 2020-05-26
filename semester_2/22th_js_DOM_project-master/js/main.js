// Selected the div with the id of "larry-the-lion"

// document is the root node (the upper most node in the DOM tree)
// a Node is a JavaScript object that represents an HTML element

// <node>.querySelector('<css-selector>') a method provided to us that allows us to select an individual Node within the DOM. Will only return the first node that matches the selector

const larryTheLion = document.querySelector("#larry-the-lion")
const teamSalmon = document.querySelector(".team.salmon")
// all DOM Nodes will have hte .querySelector method available so you can select sub nodes

// <node>.querySelectorAll('<css-selector>')
const teams = document.querySelectorAll('.team') // Returns a NodeList
// querySelectorAll will return to you all nodes that match the selector in an Array-like structure. Note: this is NOT an Array but does have some built in methods that mimic an array and can be iterated over using `for..of` or the `.forEach()`

if (false) {
  for (const node of teams) {
    console.log(node)
  }
  
  teams.forEach(node => console.log(node))
}

// alternative selectors
const toxicTim = document.getElementById('toxic-tim')

const teams2 = document.getElementsByClassName('team')
// getElementsByClassName is like querySelectorAll but instead of returning a NodeList it returns a HTMLCollection

// Exercises

const moneyBagsMichaelAndLarryTheLion = document.querySelectorAll('#larry-the-lion, #moneybags-michael')

const allTeamTealButFirst = document.querySelectorAll('.team.teal .doggo:not(:first-child)')

const secondDogs = document.querySelectorAll('.team .doggo:nth-child(2)')

// Select Surrounding Nodes/Navigating nodes

const inbreadDog = document.querySelector('#inbread-dog')

inbreadDog.previousElementSibling // returns the previous sibling to inbreadDog
inbreadDog.nextElementSibling // returns the next sibling to inbreadDog
inbreadDog.nextElementSibling.nextElementSibling // returns MoneybagsMichael (2 siblings over)
inbreadDog.parentElement // returns the parent node of inbreadDog

// <node>.matches()
// checks if a node matches a css selector... will return to you true or false
console.log(inbreadDog.matches('.doggo')) // true

// Manipulating nodes

inbreadDog.style // give us access to all the in-line(hardcoded -> written in the div itself) styles for a particular node
getComputedStyle(inbreadDog) // will return the computed/real style of the node

// Changing contents of a node

// <node>.innerHTML property allows us to get/set the HTML within the selectedNode
// <node>.outerHTML property allows us to get/set the Whole node

larryTheLion.outerHTML = "<div id='larry-the-lion' class='doggo fighter' style='color: red'><h2>Lettuce The Lion</h2></div>"

// <node>.innerText is a setter/getter for the text within a node

// changing ids and classes

// <node>.id -> .id is getter/setter for the id property
// <node>.className -> .className is getter/setter for the class property. We don't use class because it is a reserved word in Javascript.

toxicTim.classList // classList is a abstraction over className. Lets us view/edit the classes of a node easier by providing us methods like add()/remove()

// getAttribute
// setAttribute

toxicTim.getAttribute('class') // returns the value of the class attribute
// you can add custom attributes to a node using setAttribute
toxicTim.setAttribute('bark', 'woof')
// you can retrieve custom attributes from a node using getAttribute

// if you wanted to add data/custom attributes to a node you want to append "data-"
toxicTim.setAttribute('data-speak', 'woof')

// this way you can have acces to the custom data via a .dataset property
toxicTim.dataset.speak // returns "woof"


if (false) {
  // Exercise Remove all the `doggo` and `fighter` class from every div
  // 1) select all the nodes
  const divs = document.querySelectorAll('div')
  // 2) iterate over all the nodes
  divs.forEach(node => {
    // 3) remove classes from nodes
    if (node.getAttribute('class')) { // checking to see if the node has a class/className attribute
      if (node.getAttribute('class').includes('doggo')) { // check if class has value that includes doggo
        node.setAttribute('class', '') // set the class attribute to empty string
      }
    }
  })
}

// Remove

// <node>.remove() is a method used to delete a node from the dom

// Exercises: Vandalise the Arena

// 1)

const t2 = document.getElementsByClassName('team')
t2.style['background-color'] = 'red'