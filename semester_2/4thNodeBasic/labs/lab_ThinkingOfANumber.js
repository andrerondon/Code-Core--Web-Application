const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});







function createGuesingGame(n) {
  rl.question("I'm thinking of a number between 1 and 10 \n", (n) => {
            let number = Math.floor(Math.random(n) * 10 + 1);
            if (guess > number) {
              console.log(guess, "Your guess is out of bounds. Must be within 0 and 10");
            }
            for (let i = 0; i < number; i++){
              if (guess === number) {
                console.log(`You've guessed the correct number after ${i} attempts`);
                rl.close()
              } else {
                if (guess > number) {
                  return "your guess was too high"
                } else {
                  return "your guess was too low"
                }
              }
            }
            
        
      // }
    
  })
}

createGuesingGame(8);



