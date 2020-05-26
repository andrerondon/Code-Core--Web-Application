// JS DOM

// Selecting Nodes Demo

// A Node is a JavaScript object that represents an HTML element
// frm an HTML document.

// <node>.querySelector('<css-selector>');
// This will find the **first** node that matches the <css-selector>
// The <css-selector> needs to be given as a string, or as a variable
//  whose value is a string, the `querySelector` method belongs to all Node
// objects, including document

const toxicTim = document.querySelector("#toxic-tim");
const teamSalmonSelector = ".team.salmon";
const teamSalmon = document.querySelector(teamSalmonSelector);
const lastDoggoOfTeamSalmon = teamSalmon.querySelector(".doggo:last-child");

// variable naming cases
// PascalCase, snake_case, kebab-case, camelCase

// Exercise Picking Doggos
// 1. Select Moneybags Michael and Larry the Lion
const moneyBagsAndLarry = document.querySelectorAll(
  "#moneybags-michael, #larry-the-lion"
);
// 2. Select all Team Teal Doggos but the first
const allTeamTealDoggosButFirst = document.querySelectorAll(
  ".team.teal .doggo:not(:first-child)"
);
// 3. Select the second doggo in every team

// Iteration Example:

// console.log("Logging all of the doggo fighters");
// const allDoggoFighters = document.querySelectorAll(".doggo.fighter");
// for (let doggo of allDoggoFighters) {
//   console.log(doggo.id);
// }
// allDoggoFighters.forEach((doggo) => console.log(doggo));

// Select in Family
// to select sibling nodes, use the properties:
const inbreadDog = document.querySelector("#inbread-dog");
inbreadDog.nextElementSibling; // gets Larry The Lion's Node
inbreadDog.previousElementSibling; // return null because there are no sibling nodes
// before inbread dog

// use the children property to select the children nodes of a node.
// It returns an 'array-like' object (actually an HTMLCollection) of Nodes.
teamSalmon.children[1].children; // Selects all of the doggos on team salmon's
// roster. The children's index begins at 0 just like arrays

// Since this HTMLCollection is 'array-like' we can use array indexing syntax
// to select a node from a collection
document.querySelector(".team.salmon .roster").children[2];
// But we have other methods of selecting a node as well...
document
  .querySelector(".team.salmon .roster")
  .children.namedItem("nina-the-ninja");


