// function countVowels (string){
//     let numberOfVowels = 0
//     for (let i = 0; i < string.length; i++){
//         let numberOfVowels = string[i]
//         if (numberOfVowels[i])
//         numberOfVowels[i]++
//     }

//     return numberOfVowels;
   
// }console.log(countVowels("hello"));

  




function mostOccurences (array){
    let object = {};
    for (let i = 0; i < array.length; i++){
        let letter = array[i];
        if (object[letter])  {
            object[letter] ++;
        } else {
            object[letter] = 1;
        }  
    } 
    
      
    return object;
}
    
console.log(mostOccurences(['a', 'b', 'b', 'c', 'd', 'd', 'e', 'e', 'e']));





// Write a function that accepts a string as an argument. It will return the number of vowels within the string.

// countVowels("eee"); // returns 3;

// countVowels("hello"); // returns 2;