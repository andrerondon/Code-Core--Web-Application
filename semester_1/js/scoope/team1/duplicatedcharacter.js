// Write a function that accepts a string as an argument. It will return a new string
//  with characters that have shown up more than once separated by spaces.

// duplicates("hello"); // returns "l"
// duplicates("hello world"); // returns "o l"

function duplicatechar (string){
    let dup = 0;
    let final = "";
     for ( let i=0; i< string.length ; i++){
          let a = string[i];
         for ( let j = 0; j< string.length ; j++){
             let b = string[j];
             if(a==b){
                 dup++;
                 if (dup==2){
                   final =final+ a+" ";
                 }
             }
         }
     }
     return final;
  }
  console.log(duplicatechar("heyy boyy"));