
const logSymbols = require('log-symbols');
const readline = require('readline');
const chalk = require('chalk');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log(chalk.red('\nWelcome to Todo CLI! \n---------------------- '));
let todoList = [];
let newArr = [];
function hulk() {
    rl.question(chalk.yellow('\n(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n\n'), function (data) {
​
        if ( data === 'v') {
            if(todoList[0] === undefined){
                console.log(chalk.green('has nothing in it'));
                
            }else{
                for (let option in todoList) {
​
                console.log(chalk.green(`${option} ${todoList[option]}`))
​
                }
                hulk();
            }
        }
        if (data === 'n') {
            rl.question(chalk.blue('What ? \n\n'), (answer) => {
                todoList.push(`[] ${answer}`);
                newArr.push(`[${logSymbols.success}] ${answer}`)
                hulk();
            })
        }
        if (data[0] === 'c') {
            if(data[1] < todoList.length){
                todoList[data[1]]= newArr[data[1]];
                console.log(chalk.red(`Completed : ${todoList[data[1]]}`))
                hulk()
            }else{
                console.log(chalk.red('does not has that many rows'));
            }
        }
        
        if (data[0] === 'd') {
            
            const prompt = chalk.red(`Deleted : ${todoList[data[1]]}`);
            todoList.splice(data[1], 1);
            newArr.splice(data[1], 1);
            console.log(prompt);
            hulk();
            
        }
        
        if (data === 'q') {
            rl.close()
        }
        else{
            hulk();
        }
    })
}
hulk()