// Write a function that accepts two numbers, x and y, as arguments.

// It will loop from 1 to 100. On every iteration it will print "fizz" if x is cleanly divisible On every iteration it will print "buzz" if y is cleanly divisible If both x and y are divisible it will print "fizzbuzz" If it is not divisible then it will just print the current number

function myFizzBuzz (x , y){
 for (let i = 1; i<=100 ; i++){
     if (i%x===0 && i%y===0){
        console.log("fizzbuzz"); 
     } else if (i%x===0){
         console.log("fizz");  
     } else if(i%y===0) {
         console.log("buzz");
     } else {
         console.log(i);   
     }  
 }
}
myFizzBuzz(3,5)
console.log("///////////////////////////////////");

myFizzBuzz(8,9)
