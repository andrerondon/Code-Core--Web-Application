var array1 = [1, 2, 6, 'a', '7', 3, 'a', 4, 2];



let greater = array1.find((element) =>element > 3);


let divisible = array1.find((element) => element % 3 === 0);


  
let firstElement = array1.find((element) => typeof element === 'string');
         
  
let firstDuplicated = array1.find(function(element, index, array1) {
    return array1.indexOf(element) !== index;
  }); 


// console.log(greater);
console.log(divisible);
// console.log(firstElement);
// console.log(firstDuplicated);



// expected output: 12

// Use Array.find to get the following from the provided array:

// const array = [1, 2, 6, 'a', '7', 3, 4, 4, 2];

// 1) First element greater than 3

// 2) First element divisible by 3

// 3) First string

// 4) First duplicated element

