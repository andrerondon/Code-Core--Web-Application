// Pangrams (Marks: 10% )
// A pangram is a unique sentence in which every letter of the alphabet is used at least once.

// Example of Pangram:

// The quick brown fox jumps over the lazy dog.
// The above sentence is a pangram.

// Write a function to check if the sentence is a Panagram or not. Your function should return true in case the sentence is a Pangrams or false if it is not


function isPangram(string){
    let newString = string.toLowerCase()  // converting a string with all letter in lowercase to help with question
    let alpha = "abcdefghigklmnopqurstuvwxyz";   // all letter to the alphabet to be checked 
    for(let i = 0; i<alpha.length; i++){  // I loop to pass by the alphabet string
      if(newString.indexOf(alpha[i]) == -1){  // The indexOf() method returns the position of the first occurrence of a specified value in a string. // This method returns -1 if the value to search for never occurs.
      return false;   // if alphabet not occurs in the newString return false
      }
    }
      return true;  // if occurs  return true
    }
    

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("The lazy dog"));
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));

