// Write some code that writes "1" to the console, then 1 second later writes "2" to the console, then 2 seconds after that writes "3" to the console, ..., until it gets to "10".




for (let i = 1; i <= 10; i++) {
         setTimeout(() => {
        console.log(i)  
    }, i * 1000);
     
}
