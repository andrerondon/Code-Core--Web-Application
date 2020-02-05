
// Calculator
// Create a basic calculator constructor with the 4 basic operations

// Test Cases



    function Calculator(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;

        this.add = function (){
            return number1 + number2;
        }
        this.subtract = function (){
            return number1 - number2;
        }
        this.multiply = function (){
            return number1 * number2;  
        }
        this.divide = function (){
            return number1 / number2;
        }
    }
    
    const calc1 = new Calculator(10, 2);
    console.log(calc1.add()); // 12
    console.log(calc1.subtract()); // 4
    console.log(calc1.multiply()); // 32
    console.log(calc1.divide()); // 2
    
    
