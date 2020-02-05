// Write a function to reverse an array. You are not allowed to use Array.reverse(). Create your own function. Try using the length function you created above.

// Examples:

// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []

// Bonus:

// Optimize your function in such a way that if it is passed with string, it returns string. If it is passed with array it should return an array.

function reverse (array){
    let newArray = []
    for (let x = array.length-1; x >= 0 ; x-- ) {
        newArray .push(array[x])
    }
    if (typeof array === "string"){
        return newArray.join('')
    } else {
        return reverse
    }


}
console.log(reverse([1, 2, 3, 4]));
console.log(reverse('andre'));
console.log(reverse('a,n,d,r,e'));