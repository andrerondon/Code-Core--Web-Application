const array = [1, 2, 3, 4, 5];

let arrayReduce = array.reduce(function(acc, cur)
{
    return acc + cur
});

console.log(arrayReduce);

// function customReduce (arr, callbackFn, initialValue){
//     let total = initialValue
//     for (let i = 0; i < arr.length; i++){
//         const currentValue = arr[i];
//         total = callbackFn (total, currentValue, i , arr);
        
//     }
//  return total
// }
// console.log(customReduce);
