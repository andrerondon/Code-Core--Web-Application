function matching (arr,x){
    for (let i=0; i < arr.lenght; i++){
        if (arr[i]==x){
            return i;
        }
    }
    return false;
}
console.log(matching('hello','p'));

// Write a function that accepts 2 arguments arr and x. It will return the index of the first occurrence of x. If x is not found return false

// find([1,2,3], 2); // returns 1

// function matching (arr,x){
//     for (let i=0;i<arr.length;i++){
//         if (arr[i]==x){
//             return i;
//         }
//     }
//     return false;
// }
// console.log(matching('hello','p'));
