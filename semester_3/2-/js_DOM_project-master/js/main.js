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

