// Timers Challenge 2
// Write a script to continuously print the message “Hello World” with varying delays. Start with a delay of 1 second and then increment the delay by 1 second each time. The second time will have a delay of 2 seconds. The third time will have a delay of 3 seconds, and so on.

// Include the delay in the printed message. The expected output looks 


// function timersChallenge (){
//     let count =0;
//     const Name = setInterval(function (){
//         console.log("Hello World");
//         count++;
//         if(count===5){
//             clearInterval(Name);
//             console.log("Done");
            
//         }
//     }, 1000);     
// }
// timersChallenge();


const continuously = function(time) {
    const interval = setInterval(() => {
        console.log("Hello World");
        clearInterval(interval)
        continuously(time+1000)
      
        
    }, time);
    
}
continuously(1000)