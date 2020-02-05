// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// Using Array.filter create a new array that is the following with the provided array:

// const array = ['a', '1', 55, 5, 8, 'apple', 25, 'andreAmaPriscila'];
// 1) Only strings

// 2) greater than 3

// 3) length is greater than 3

// 4) Duplicated elements

var array = ['a','1', '1','a', 5, 55, 8, 'apple', '25', 'AndreLovePriscila', 55, 'a', 'AndreLovePriscila'];


    const filter1 = array.filter (function(element) {
        return typeof element === 'string';
    });
    
    const filter2 = array.filter (function(element) {
        return element > 3 && typeof element === 'number';
    });

    const filter3 = array.filter (function(element) {
        return element.length > 3;
        
    });

// var array = ['a', [],'1','1','a', 5, 55, 8, 'apple', '25', 'AndreLovePriscila', 55, 'a', 'AndreLovePriscila'];
    const filter4 = array.filter(function(element, index, array) {
        return array.indexOf(element) !== index;
      }); 

// console.log(filter1);
// console.log(filter2);
// console.log(filter3);
console.log(filter4);