// Write a function, reverse that takes a string and returns another string with the characters in reverse order.

// Example:

// const greeting = "hello"
// reverse("hello") // "olleh"
// console.log(greeting) // "hello"
// reverse("dog") // "god"
// reverse("codecore") // "erocedoc"


function reverse(string){
    let newstring = []
    for (let i=string.length-1; i >= 0; i--){
        newstring.push(string[i])
        // console.log("andre");
        
    } return newstring.join('')
}
console.log(reverse ("ande"));
 
