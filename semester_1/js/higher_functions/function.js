function sayHi (){
    return "Hi";
}

function fnAccepter (fn){
    console.log(fn());  
}

fnAccepter(sayHi)
 // fnAccepter(argument) {
     // console.log(sayHi())
 //}
-----------------------------------


function add (a, b){
    const total = a + b;
    return total;
}

function fnReturner (){
    return add;
}

const adder = fnReturner ();
adder === add;
adder(4, 3);