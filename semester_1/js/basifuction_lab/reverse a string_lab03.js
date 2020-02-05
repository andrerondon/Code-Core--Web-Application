function reverse (string){
        let newString = []
        for (let x=string.length-1;x>=0;x-- ) {
            newString.push(string[x])
        }
    
    console.log(newString.join(''))
}
reverse('andre')




//Write a function, reverse that takes a string and returns another string with the characters in reverse order.

// Example:

// reverse("hello") // "olleh"
// reverse("dog") // "god"
// reverse("codecore") // "erocedoc"
// Is it possible to modify the string itself instead of returning a copy of the original string? Why or why not?