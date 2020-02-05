function removeSpace (string){
    let newString = ""
    for (let i = 0; i < string.length; i++ ){
        if (string[i] != " "){
            // console.log(string[i]);
            
            newString += string[i]    
        }
    
    }   
    return newString;
}

 
console.log(removeSpace ("H i E v e r y B o d y S a y H e l l o"));

// Write a function that accepts a string as an argument. It returns the string without spaces.

// removeSpaces("he ll o"); // returns "hello"