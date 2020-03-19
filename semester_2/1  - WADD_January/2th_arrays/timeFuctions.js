/* 
  setTimeout is a higher order function that will 
  execute a function after X amount of milliseconds

  The setTimeout function receives 2 parameters:
    1) a callback
    2) a number which represents milliseconds
*/

// Log out 'Hello' after 5 seconds
setTimeout(() => {
    console.log('Hello')
  }, 5000)

  // OR

//   function grittins(){
//       console.log('hello');
      
//   }
//   setTimeout(grittins, 1000)
  
  // Log out 'Hello' every second
//   setInterval(() => {
//     console.log('Hello')
//   }, 1000)
  

// Log out 'Hello' every second
const id = setInterval(() => {
    console.log('Hello')
  }, 1000)
  
  // clearInterval after 10 seconds
  setTimeout(() => {
    clearInterval(id)
  }, 10000)
  