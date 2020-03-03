const fs = require("fs");
const readline = require("readline");
const chalk = require('chalk');

console.log(chalk.bgRed('Welcome to Todo CLI!'));


console.log(chalk.red('\n--------------------------------------'));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
   prompt: chalk.yellow("\n(v) View • (n) New • (c) Complete • (d) Delete • (q) Quit\n")
});

class Todo {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  complete() {
    this.completed = true;
  }
  brackets() {
    if (this.completed) {
      return "[✓]";
    } else {
      return "[ ]";
    }
  }
  print() {
    return `${this.brackets()} ${this.name}`;
  }
}

let newArr = [];

rl.prompt();


rl.on("line", line => {
  // console.log(line)
  // console.log("I got here");
  
  
  let userInput = line.trim();
  switch (userInput) {
    case "v":
      if (newArr.length === 0) {
        console.log("List is empty");
      } else {
        for (let i = 0; i < newArr.length; i++) {
          console.log(`${i} | ${newArr[i].print()}`);
        }
      }
      break;

    case "n":
      rl.question("What?\n", answer => {
        newArr.push(new Todo(answer));
        rl.prompt();
      });
      break;

    case userInput.match(/^c/) && userInput:
      let itemIndex = userInput.slice(1);
      newArr[itemIndex].complete();
      
      
      console.log(`Completed ${newArr[itemIndex].name}`);
      break;

    case userInput.match(/^d/) && userInput:
      let itemIndexDelete = userInput.slice(1);
      console.log(`Deleted ${newArr[itemIndexDelete].name}`);
      newArr.splice(itemIndexDelete, 1);
      break;

    case "q":
        
      break;

  }
  rl.prompt();
});