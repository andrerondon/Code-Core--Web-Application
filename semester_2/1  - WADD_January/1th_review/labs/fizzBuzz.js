// Lab - FizzBuzz
// Write code that prompts the user for two numbers, then iterates through the numbers 1 - 100. The function will print "fizz" if the current number is divisible by the first number, "buzz" if the current number is divisible by the second number, "fizzbuzz" if it's divisible by both, else print the current number.

function fizzbuzz(n1,n2){
    for (let i = 1; i < 100; i++){
        if (i % n1 === 0){
            console.log(`${i}fizz`);
             
        }if (i % n2 === 0){
            console.log(`${i}buzz`);
             
        }if(i % n1 === 0 && i % n2 === 0){
            console.log(`${i}fizzBuzz`);
             
        }else {
            console.log(i);
            
        }
    }  
}
fizzbuzz(2,5);

