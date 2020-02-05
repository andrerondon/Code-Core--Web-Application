// Javascript Switch Statement

switch(5 + 5) {
    case 5:
      // if the expression in the parenthesis after the `switch` keyword is 5 then 
      // run the code in this case/section
      // break is used to exit whatever control statement we are currently in
      console.log('it is 5');
      break;
    case 6:
      console.log('it is 6');
      break;
    case 10:
      console.log(' it is 10');
      break;
    default:
      console.log('default case');
  }
  
  switch (true) {
    case 5 === 5:
      console.log('a');
      break;
    case true:
      console.log('b');
      break;
    case false:
      console.log('c');
      break;
    default:
      console.log('default');
  }
  