// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Using Array.reduce create a value that adds all the numbers from the following array

const array = [2, 4, 6, 8, '10', '5', 25, [], 'rabbit', '1', 1];

let filter1 = array.filter ((element) => typeof element === 'number');

let arrayReduce =filter1.reduce(function(acc, cur)
{
    return acc + cur
});


// const reduce1 = array.reduce(arrayReduce) 

// console.log(reduce1);
console.log(arrayReduce);



