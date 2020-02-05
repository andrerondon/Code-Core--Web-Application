function notValidArguments(arg1, arg2) {
    return !(arg1 && arg2)
}

function addition(number1, number2) {
    if (notValidArguments(number1, number2)) {
        console.log(`${addition.name}: must provide valid argument`);
        return
    }
    return number1 + number2;
}

function substract(number1, number2) {
    if (notValidArguments(number1, number2)) {
        console.log(`${addition.name}: must provide valid argument`);
        return
    }
    return number1 - number2;
}
const divide = function (number1, number2) {
    if (notValidArguments(number1, number2)) {
        console.log(`${divide.name}: must provide valid argument`);
        return
    }
    return number1 / number2;
}
const multiply = (number1, number2) => {
    if (notValidArguments(number1, number2)) {
        console.log(`${multiply.name}: must provide valid argument`);
        return
    }
    return number1 * number2;
}
// 5*3 / 6 + 1
//BEDMAS
console.log(addition(divide(multiply(5,3),6),1)) ;

//(2+3)*(5+1);
let result = multiply(addition(2,3),addition(5,1));
console.log(result);
