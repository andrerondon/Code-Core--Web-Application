

// Write a function that accepts a number. It will return true if all the numbers are even. 
// It will return false if at least one of the numbers are not even.

// allEven(2468); // returns true
// allEven(123456); // returns false

function totalEvenNumber (a){
     
     for (let i=0; i < a.lenght ; i++){
         if(i%2==0){
            
             console.log('true');
            }else{
             console.log('false');
             }
     }
       
 }
 totalEvenNumber(24567)



 function findodd (num){
   let a = "";
   for ( let i=0; i<num.length; i++){
       if(parseInt(num[i])%2==0){
           a = "true";
       }else{
          a = "false";
          break ;
       }
   }
   return a ;
}
console.log(findodd ("88888888222444466665"))




// function add(a,b){
//     let total=a+b;
//     // console.log(total);
//     return total
// }
// let output = add(4+6,5);
// console.log(output);

// /////////////////////////
// function sum(arguments) {
//     var s = 0;
//     for (var i=0; i < arguments.length; i++) {
//         s += arguments[i];
//         if(typeof(s)!=="number")
//         {
//          console.log("false")
//         }
//     }
//         console.log(s);
//  }
//  sum(1,13 ,56, 4,3, 2,  7, 3,'hghj')