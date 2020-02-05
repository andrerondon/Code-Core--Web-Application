function removeVowels (string){
    let stringWithouVowels = ""
    for (let i = 0; i < string.length; i++){
        if (string[i] !== "a" && string[i] !== "e" && string[i] !== "i" && string[i] !== "o" && string[i] !== "u" && string[i] !== "A" && string[i] !== "E" && string[i] !== "I" && string[i] !== "O" && string[i] !== "U")
        stringWithouVowels += string[i]
    }
    return stringWithouVowels
}


// Write a function that accepts a string. It will return the string without vowels a e i o u.

console.log(removeVowels("appleAEBBB"));      // returns "ppl"