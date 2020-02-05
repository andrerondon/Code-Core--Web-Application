// Using Array.map create a new array that is the following with the provided array: const array = ['a', '1', 5, 55, 8, 'apple', '25'];

// 1) Only strings

// 2) Only numbers (type exclusive)

// 3) Repeated by index

// 4) Doubled if it is a number, itself otherwise

var array1 = ['a', '1', 5, 55, 8, 'undefined','apple', '25'];

function OnlyStrings(element) {
    if (typeof element === 'string') {
        return element;
    } 

}
const map1 = array1.map(OnlyStrings) 
    


function OnlyNumbers(element) {
    if (typeof element === 'number') {
        return element;
    } 

}

const map2 = array1.map(OnlyNumbers)

// var array1 = ['a', '1', 5, 55, 8, 'apple', '25'];

const map3 = array1.map(function(element, index){
    return `${element} `.repeat(index);
});


const newArray = []
const map4 = array1.map(function(element, index){
    for (let y = 0; y < index; y++){
        newArray.push(element);
    }
    
});


const map5 = array1.map(function(element) {
    if (typeof element === 'number') {
        return element *2;
    } else {
        return element;  
    }
 
});

console.log(map1);
console.log(map2);
// console.log(map3);
// console.log(newArray);
// console.log(map5);


