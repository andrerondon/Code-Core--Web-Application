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
////
