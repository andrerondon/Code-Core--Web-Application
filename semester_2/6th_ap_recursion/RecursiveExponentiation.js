// Recursive Exponentiation
// Write a function, `pow`, that takes in a base number and an exponent. It must return the base number to the power of the exponent using *recursion*. You are not allowed to use the `**` operator nor the `Math.pow` function.

function pow(n1, n2){
    if(n1 <= 1){
        return n1
    } else{
    return pow(n1) * pow (n1 * n2)
    }
}


// Example usage:


// ```javascript
console.log(pow(10, 3)); // 1000
console.log(pow(2, 4));// 64
console.log(pow(0, 100));// 0
console.log(pow(1, 1000)); // 1



 

 



