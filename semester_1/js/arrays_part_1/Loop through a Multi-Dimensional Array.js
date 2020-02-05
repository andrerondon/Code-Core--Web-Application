function printMulti (array){
    for (let i=0; i < array.length; i++){
        if (Array.isArray(array[i])==true){
            console.log(array);
        }return array
        
    }
}console.log(printMulti([1,2,3,4,5,6]))
// console.log(printMulti([[2,3,4], ["Hello CodeCore", 1, true]]));


// Write a function called printMulti that takes an array of arrays, such as:

// const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];
// const otherArray = [1,2,3, [4,5,6], [7,8,9]];
