// Write a function sortArray that accepts an array of words. It will sort these words by alphabetical order.

const words = ['blue', 'apple', 'likes', 'bandaids'];

function sortArray(){
    let newArr = [...words]
    let arr2 = newArr.sort()
    return arr2
}


console.log(sortArray(words)); // ['apples', 'bandaids', 'blue', 'likes'];
console.log(words);



// Make sure the original array does  not mutate.