// function removeVowels(string) {
//     return string.replace(/[aeiou]/gi, '');
//   }
  

// console.log(removeVowels("i love code core"))

// Found this at the internet



  function removeVowels (string){
    let withoutVowls = "";
    for (i = 0; i < string.length ; i++){
        if (string[i]!=="a" && string[i]!=="e" && string[i]!=="i" && string[i]!=="o" && string[i]!=="u"){
            withoutVowls += string[i];
        }
    }
    return withoutVowls ;
 }
 console.log(removeVowels("andre"))




// Write a function that accepts a string. It will return the string without vowels a e i o u.

// removeVowels("apple"); // returns "ppl"