// JS DOM
if (false) {
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

  // Changing the contents of a node
  // There are 4 properties to read and write to the contents of
  // a node. They are: .innerHTML, .innerText, .outerHTML, .outerText
  teamSalmon.innerHTML; // returns all of the HTML content inside Team Salmon as a string
  teamSalmon.innerText; // returns all of the content with HTML tags stripped effectively,
  // just the text

  // The versions with .outer* are nearly the same, except they include the node itself

  // Reading and writing to HTML attributes
  toxicTim.id; // "toxic-tim"
  toxicTim.class; // undefined
  toxicTim.className; // "doggo fighter"
  toxicTim.href; // this is for anchor tags
  toxicTim.name; // read the name attribute of an input field

  // <node>.getAttribute(<attribute-name>);
  // Returns the value of an HTML attribute with the name
  // <attribute-name> from <node> even if it is a custom attribute

  toxicTim.getAttribute("id"); // "toxic-tim"
  toxicTim.getAttribute("class"); // "doggo fighter"

  // <node>.setAttribute('<attribute-name>', '<value>');
  // Set or update an attribute with name <attribute-name> to the value <value>
  // toxicTim.setAttribute("id", "nina-the-ninja");
  toxicTim.setAttribute("data-method", "delete");
  toxicTim.setAttribute("data-target", "#navbar-nav");
  toxicTim.setAttribute("favourite-wizard", "Gandalf");

  // Working with classes

  // Adding a single class
  toxicTim.classList.add("dead");
  // removing a class
  toxicTim.classList.remove("dead");
  // Adding multiple classes
  toxicTim.classList.add("dead", "invisible");
  // removing multiple classes
  toxicTim.classList.remove("dead", "invisible", "dlkjsfadfsdfa");
  // no error is thrown if trying to remove a class that does not exist on an element

  toxicTim.classList.toggle("invisible");
  // if not already invisible, makes invisible
  // otherwise, turns off invisibility

  // removing a node
  // toxicTim.remove();

  // Exercise: Vandalise the Arena
  // 1. Change the color of all teams to fuchsia
  // const teams = document.querySelectorAll(".team");
  // for (let node of teams) {
  //   node.style.backgroundColor = "fuchsia";
  // }
  // 2. Rename all doggos to Rob The Slob
  // const allDoggos = document.querySelectorAll(".doggo.fighter");
  // allDoggos.forEach((doggo) => (doggo.innerHTML = "Rob The Slob"));
  // 3. Change all doggo picture to that of a cat from internet
  // allDoggos.forEach(
  //   (doggo) =>
  //     (doggo.style.backgroundImage =
  //       "url(https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg)")
  // );

  // Creating nodes
  // document.createElement("<tag-name>");
  // To create a node, use the method above with the name of a tag
  // "p", "div", "form", "button", etc

  const drillBitDarel = document.createElement("div");
  drillBitDarel.id = "drill-bit-datel";
  drillBitDarel.classList.add("doggo", "fighter");
  drillBitDarel.style.backgroundImage = `url(./images/drill_bit_darel.jpg)`;

  const h1 = document.createElement("h1");
  h1.innerText = "Drill Bit Darel";

  drillBitDarel.append(h1);

  // <parent-node>.append(<child-node>, <child-node>, ...);
  // Adds all <child-node> arguments as the last children of a <parent-node>

  // Because team teal is a node that is a part of DOM,
  // appending any node to this node will also make the appended node appear in the DOM
  // Making it visible on the screen.
  const teamTealRoster = document.querySelector(".team.teal .roster");
  teamTealRoster.append(drillBitDarel);

  // to prepend a node to the beginning of a node,
  // we can use prepend method
  // teamTealRoster.prepend(drillBitDarel);

  // <node>.cloneNode(<deep-clone>)
  // To make copies of <node>, use the cloneNode method.
  // This will duplicate a node without duplicating its descendants
  // To include descendants, pass in 'true' as an argument
  drillBitDarel.cloneNode(true);
  teamSalmon
    .querySelector(".roster")
    .prepend(
      drillBitDarel.cloneNode(true),
      drillBitDarel.cloneNode(),
      drillBitDarel.cloneNode(),
      drillBitDarel.cloneNode(true)
    );
}

// Events and The loops

// listening to events
// 1. Inline event handlers => <button onclick="doSomething();">click me</button>
// 2. DOM event handlers => window.onload = () => { // window loaded }
// 3. Using addEventListener() => modern way and it allows us to register as many handlers as we need.
//  window.addEventListener('load', () => { // do something here })

// Events

const toxicTim = document.querySelector("#toxic-tim");
const teamSalmon = document.querySelector(".team.salmon");

// <node>.addEventListener('<event-name>', <listener-callback>);
// this method allows us to react with a callback to events that
// occure on a node in the browser

// Its first arg. is a string that corresponds to the name of an event.
// You write any name here. It must be on the possible events.
// https://developer.mozilla.org/en-US/docs/Web/Events

// Its second arg. is a callback named "listener" that is
// called/executed when the event is triggered
// Much like setTimeout or setInterval, it is asynchronous
if (false) {
  teamSalmon.addEventListener("click", (event) => {
    // console.log("team salmon clicked");
    // console.log("event: ", event);
    // The 'event' object contains a host of userful information
    // about the trigerred event
    // including (but not limited to) the position of the cursor,
    // which modifier was held at the time (e.g. shift, alt, cmd, etc)
    // which node was clicked, at what datetime the event was triggered,
    // etc
    console.log("=============");
    console.log("event type: ", event.type);
    // The 'target' property refers to the node that originally
    // triggered the event. In the case of a "click" event,
    // that is the node where the cursor was located at
    // the time of the click.
    // It will always be a descendant of the currentTarget node,
    // OR the currentTarget node.
    console.log("target: ", event.target);
    // The 'currentTarget' property refers to the node that
    // calls the 'addEventListener' method.
    // It is the 'listening node'.
    // In this case, it is always going to be 'teamSalmon'
    console.log("currentTarget: ", event.currentTarget);
  });

  toxicTim.addEventListener("click", (event) => {
    console.log("target: ", event.target);
    console.log("currentTarget: ", event.currentTarget);
  });
}

if (false) {
  // Add an event to doggo titles that says doggo name was clicked
  // whenever we click on the doggo name

  document.querySelectorAll(".doggo.fighter h1").forEach((title) => {
    title.addEventListener("click", (event) => {
      console.log(`${event.target.innerText} was clicked!`);
    });
  });
}

// Instance of Node
const p = document.querySelector("p");
// when document.querySelector finds nothing, it returns null
if (p instanceof Node) {
  p.addEventListener("click", () => console.log("a div was clicked!"));
}

if (false) {
  // whenever toxic-tim was clicked, print the cursor position
  toxicTim.addEventListener("click", (event) => {
    // console.log("event: ", event);
    console.log(`Cursor position: (${event.clientX}, ${event.clientY})`);
  });

  // Exercise: add a click event to doggos, whenever you click
  // on a doggo, move it to the last in queue
  document.querySelectorAll(".doggo.fighter").forEach((doggo) => {
    doggo.addEventListener("click", (event) => {
      const doggoNode = event.currentTarget;
      // console.log(doggoNode);
      const rosterNode = doggoNode.closest(".roster");
      rosterNode.append(doggoNode);
    });
  });
}

// Mouse & The doggo
document.querySelectorAll(".doggo.fighter").forEach((doggoNode) => {
  // dblclick
  doggoNode.addEventListener("dblclick", (event) => {
    console.log(`${event.currentTarget.id} was double clicked`);
    event.currentTarget.classList.toggle("bordered");
    console.log("event: ", event);
  });

  // mousedown
  doggoNode.addEventListener("mousedown", (event) => {
    event.currentTarget.classList.add("flipped");
  });

  // mouseup
  doggoNode.addEventListener("mouseup", (event) => {
    event.currentTarget.classList.remove("flipped");
  });

  // mouseleave
  doggoNode.addEventListener("mouseleave", (event) => {
    event.currentTarget.classList.remove("flipped");
  });
});

// Exercise: where is my cursor?
const coordsDiv = document.createElement("div");
coordsDiv.id = "coordinates";
coordsDiv.style.position = "fixed";
coordsDiv.style.bottom = "0";
coordsDiv.backgroundColor = "white";
document.body.append(coordsDiv);
document.addEventListener("mousemove", (event) => {
  const position = `(${event.clientX}, ${event.clientY})`;
  coordsDiv.innerText = position;
});

// Form & input Events
// Type loudly & Explode on Submit

const random = (n) => Math.ceil(Math.random() * n);
const keySound = () => new Audio(`sounds/vintage-keyboard-${random(5)}.wav`);

document.querySelectorAll("input").forEach((inputNode) => {
  inputNode.addEventListener("input", (event) => {
    // console.log(event.currentTarget.value);
    keySound().play();
  });
});

const explosionSound = () => new Audio("sounds/small-explosion.wav");
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  // preventDefault() prevents the form from being submitted
  // this prevents the forms default behavious.
  // When used with forms, the form data will not be submitted somewhere
  // when used with links, the href will not be followed
  explosionSound().play();
});

// Exercise: Applicant's avatar
const applicantPreview = document.querySelector(
  "#application-preview .doggo.blank"
);

document
  .querySelector("input[name=picture-url]")
  .addEventListener("input", (event) => {
    const imageUrl = event.target.value;
    console.log("imageUrl: ", imageUrl);
    applicantPreview.style.backgroundImage = `url(${imageUrl})`;
  });

// Creating a doggo when submitting the form
document.addEventListener("DOMContentLoaded", () => {
  // DOMContentLoads event will run the callback
  // only after everything is loaded to the DOM
  document
    .querySelector("#application-form")
    .addEventListener("submit", (event) => {
      const formNode = event.currentTarget;
      // To easily access all of the input field values within a form
      // use the 'FormData' constructor like below, passing it the form node
      // as an argument
      const formData = new FormData(formNode);
      // debugger;
      // Use 'debugger' to interrupt a program in a browser to execute in the same scope
      // as the line where the debugger was written.
      // This is similar to 'byebug' or 'binding.pry' for Ruby
      // It will only work in your developer console.

      // To get the value of the input fields in the form by their name,
      // we use the 'get' method on the formData instance
      formData.get("name");
      formData.get("picture-url");
      formData.get("team-name");
      // We can use formData.entries() to get an iterator for looping
      // over the input fields using a for..of loop
      for (let field of formData.entries()) {
        console.log("field: ", field);
        console.log("input name: ", field[0], " input value: ", field[1]);
      }

      // transform that 'iterator' into an array
      // Array.from(formData.entries());
      // and then we can use forEach, map, etc
      const blankDoggo = document.querySelector(
        "#application-preview .doggo.blank"
      );

      blankDoggo.style.backgroundImage = `url(${formData.get("picture-url")})`;
      blankDoggo.querySelector("h1").innerText = formData.get("name");
      blankDoggo.style.border = `medium solid ${formData.get("team-name")}`;
    });
});

// Key Events
let lettersTyped = "";
document.addEventListener("keypress", (event) => {
  lettersTyped += event.key;
  const last5lettersTyped = lettersTyped.slice(lettersTyped.length - 5);
  if (last5lettersTyped === "panic") {
    window.location.replace("http://hackertyper.net");
  }
});

document.addEventListener("keydown", (event) => {
  console.log("event: ", event);
  // Destructure Assignment
  const {
    currentTarget,
    target,
    keyCode,
    altKey,
    shiftKey,
    metaKey,
    key,
  } = event;
  // instead of typing below we can destructure it to the above line
  // const currentTarget = event.currentTarget;
  // const target = event.target;
  // const keyCode = event.keyCode;
  // const altKey = event.altKey;
  // const shiftKey = event.shiftKey;
  // const metaKey = event.metaKey;
  // const key = event.key;
  if (altKey && shiftKey && keyCode === 78) {
    window.location.href = "http://nyan.cat";
  }
});
