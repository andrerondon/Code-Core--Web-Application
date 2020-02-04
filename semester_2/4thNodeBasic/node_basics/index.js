const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const l = console.log;
rl.question('What color would you like to see?', answer => {
  if (answer === 'red') {
    l(chalk.red(answer));
  } 
  if (answer === 'blue') {
    l(chalk.blue(answer));
  }
  if (answer === 'green') {
    l(chalk.green(answer));
  }
  rl.close();
})
console.log(chalk.redBright('Hello world!'));
console.log(chalk.bgMagenta('Jugraj Color!'));