// Timers Challenge 1
// Write a script to print the message “Hello World” every second, but only 5 times. After 5 times, the script should print the message “Done” and let the Node process exit.

// Constraints: You cannot use a setTimeout call for this challenge.
// Hint: You need a counter.

function timersChallenge (){
    let count =0;
    const Name = setInterval(function (){
        console.log("Hello World");
        count++;
        if(count===5){
            clearInterval(Name);
            console.log("Done");
            
        }
    }, 1000);     
}
timersChallenge();


