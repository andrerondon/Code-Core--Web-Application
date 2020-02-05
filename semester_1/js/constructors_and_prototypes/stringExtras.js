// String Extras
// Create a StringExtras utility object that has repeat, leftPad, capitalize, and countVowels methods. 
// repeat takes a string and an integer (x) and returns that string repeated x times 
// leftPad takes a string and an integer (y) and retuns y spaces followed by the string 
// captalize takes a string and captializes it 
// countVowels takes a string and returns the number of vowels found in the string 
const StringExtras = {
    repeat: function(string, x) {
        let newString ="";
        for(let i=0; i<=x; i++){
            newString += string + " ";
        }
        return newString;
    },

    leftPad: function(string, x) {
        let newString ="";
        for(let i=0; i < x; i++){
            newString += ' ';
        }
        return newString + string;
    },

    captaLize: function(string) {
        newString = "";
        for (let i = 1; i < string.length; i++){
            newString += string[i];
        }
        return string[0].toUpperCase() + newString;
    },
    
    countVowels(string){
        let counter = 0; 
        for (i = 0; i < string.length ; i++){
        if (string[i]==="a" && string[i]==="e" && string[i]==="i" && string[i]==="i"  &&string[i]==="o"  &&string[i]==="u");   
          counter += 1;
        }
        return counter
    
    },  

    countVowels: function(str) {
        let counter = 0;
        const vowels = [
            "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        let string = str.split("");
    
        for (let i = 0; i < string.length; i++) {
          if (vowels.includes(string[i])) {
            counter += 1;
          }
        }
        return counter;
      }
    
        
};

// console.log(StringExtras.repeat("hello", 3)); // hellohellohello
// console.log(StringExtras.leftPad("hello", 0)); //      hello
// console.log(StringExtras.captaLize("hello")); // Hello
console.log(StringExtras.countVowels("hello"));