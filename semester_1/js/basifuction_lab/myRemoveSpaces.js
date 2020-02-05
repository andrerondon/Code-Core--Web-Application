// Write a function that accepts a string as an argument. It returns the string without spaces.


function removeSpace (string){
    let result = ""
    for (let i = 0; i < string.length; i++ ){
        if (string.charAt(i) != " "){
            console.log(string.charAt(i));
            
         result = result + string.charAt(i)    
        }
    
    }   
    console.log(result);  
}
removeSpace ("he ll o")

// function removeSpace (string){
//     let result = "O numero é"
//     for (let i = 0; i < 5 ; i++ ){
//         //if (string.charAt(i)  " "){
//          result = result + i
//          console.log(result);      
//         }
   
//     // console.log(result);  
// }
// removeSpace ("the love")

