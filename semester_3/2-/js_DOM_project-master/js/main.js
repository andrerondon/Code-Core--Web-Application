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

// Use '.parentElement' property to return the paren node of a given node

toxicTim.parentElement; // <div class="roster">...</div>
toxicTim.parentElement.parentElement; // <div class="team salmon">...</div>
toxicTim.parentElement.parentElement.parentElement; // <div class="teams">...</div>

// console.log("Start selecting toxic tim parents");
// let parent = toxicTim;
// This prints, starting from toxic tim, all parents until there are no more
// parents
// while (parent) {
//   console.log(parent);
//   parent = parent.parentElement;
// }

// <node>.matches(<css-query>)
// return true if <node> matches the <css-query>
toxicTim.matches("h1"); // false
toxicTim.matches("#toxic-tim"); // true
toxicTim.matches(".doggo.fighter"); // true
toxicTim.matches(".doggo.fly"); // false

// <node>.closest(<css-query>)
// Searches all ancestor of <node> (beginning with itself)
// for the first node that matches the <css-query>.
// If no matching ancestor node, then return 'null'
// Can be thought like a reverse .querySelector(...)

toxicTim.closest("div"); // <div id="toxic-tim" class="doggo fighter">...</div>
toxicTim.closest(".team"); // <div class="team salmon">...</div>

// Manipulating Nodes

// Changing Inline Styles

// Noes have a 'style' property that can be used to manipulate the
// inline style of an HTML element.
// This is the same as adding CSS to the 'style' attribute of a tag.

// When using the '.' notation, we use camelCase to refer to CSS property names
// border-radius
// toxicTim.style.border = "solid 5px lime";
// toxicTim.style.borderRadius = "10px";

// Since toxicTim like any Node is just a special JS object,
// we can also use '[]' notation
// toxicTim.style['background-image'] = 'url(images/paws.jpg)';

// To read the actual computed styles of a node, use the global function
// 'getComputedStyle(<node>)'
getComputedStyle(toxicTim);

// You can change these styles from here.
// getComputedStyle(toxicTim).backgroundColor = "red"; // This will not work


// 