// Write a function that accepts an array of letters. It will return the letter that occurs the most amount of times.

// examples

// mostOccurences(['a', 'b', 'b', 'c', 'd', 'd', 'e', 'e', 'e']); returns 'e'



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
















// function repteadeLetters (arr){
//     const object = {}
//     for (let i = 0; i < arr.length;  i ++){
//         const newArray = object[arr[i]]
//         if (newArray.keys(object)){
//             newArray ++      
//          } else {
//              newArray.push.keys(object) = 1
//              console.log(newArray);
             
//          }
    
//   }

// }
// repteadeLetters(['a', 'b', 'b', 'c', 'd', 'd', 'e', 'e', 'e']);



 
// let newArray = {}
    // for (let key = 0; key < object.length; key++){
    //     maxNumber = object[key];
        
    // }