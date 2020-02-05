function loud (logger, fn){
    logger(`Calling ${fn.name}`);  
    const result = fn();
    logger(`Called ${fn.name} & returned ${result}`);
    return result;
}

function randomNumber () {
    return Math.random();
}

function sayHi(){
    return "Hi"
}

// loud(console.warn, randomNumer){
//     console.warn(`Calling ${randomNumber.name}`);  
//     const result = randomNumber();
//     console.warn(`Called ${randomNumber.name} & returned ${result}`);
//     return result;
// }

loud(console.warn, randomNumber);
loud(console.error, sayHi);

// What is callback functions?