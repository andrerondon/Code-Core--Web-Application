function addDigits(number) {
    let result = 0;
    let sum = 0;
    let firststring = number.toString();
    
    for (let i = 0; i< firststring.length; i++) {
            sum += +firststring[i];
    } 

console.log(sum);

// if the sum of digits is bigger than 9 add them again
        
    if (sum > 9) {
            const secondstring = sum.toString();
                for (let i = 0; i<secondstring.length;i++) {
                    result += +secondstring[i];   
                }
                return result;
    } 
     
    
}
console.log(addDigits(448));
// console.log(addDigits(789));
// console.log(addDigits(194));
