// Recursive Exponentiation
// Write a function, `pow`, that takes in a base number and an exponent. It must return the base number to the power of the exponent using *recursion*. You are not allowed to use the `**` operator nor the `Math.pow` function.

function pow(n1, n2){
    if(n1 === 0){
        return 0;
    }
    if(n2 === 0){
        return 1;
    }

    return n1 * pow(n1, (n2-1));
    
}

console.log(pow(2,4))



// function pow(n1, n2){
//     let arr = []
//     if (n1 > 1){
//     arr.push(n1 * n1 * n2)
//     } else if(n1 <= 1){
//     return n1
//     }
    
// }

console.log(pow(10, 3)); // 1000
console.log(pow(2, 4));// 16
console.log(pow(0, 100));// 0
console.log(pow(1, 1000)); // 1
console.log(pow(0, 0));


 

 



