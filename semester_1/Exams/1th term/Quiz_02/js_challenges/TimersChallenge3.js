// Timers Challenge 3
// Write a script to continuously print the message “Hello World” with the same varying delays concept as challenge #2, but this time, in groups of 5 messages per main-delay interval. Starting with a delay of 100ms for the first 5 messages, then a delay of 200ms for the next 5 messages, then 300ms, and so on.

// Here’s how the script should behave:

// At the 100ms point, the script will start printing “Hello World” and do that 5 times with an interval of 100ms. The 1st message will appear at 100ms, 2nd message at 200ms, and so on.
// After the first 5 messages, the script should increment the main delay to 200ms. So the 6th message will be printed at 500ms + 200ms (700ms), 7th message will be printed at 900ms, 8th message will be printed at 1100ms, and so on.
// After 10 messages, the script should increment the main delay to 300ms. So the 11th message should be printed at 500ms + 1000ms + 300ms (18000ms). The 12th message should be printed at 21000ms, and so on.
// Continue the pattern forever.
// Include the delay in the printed message. The expected output looks like this (without the comments):

// Hello World. 100  // At 100ms
// Hello World. 100  // At 200ms
// Hello World. 100  // At 300ms
// Hello World. 100  // At 400ms
// Hello World. 100  // At 500ms
// Hello World. 200  // At 700ms
// Hello World. 200  // At 900ms
// Hello World. 200  // At 1100ms


const continuously = function(time) {
    let count =0;
    const interval = setInterval(() => {
        console.log(`hello world ${time}`);
        count++;
        if(count>=5){
            clearInterval(interval);
            continuously(time+100) ;           
        }
    }, time);
    
}
continuously(100)