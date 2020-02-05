// Javascript: Control Flow
// Used to determine what blocks of code runs

// We use the keyword `if` to declare a if statement
// followed by parenthesis which contain an expression which will evaluate to a boolean value.
// If the boolean value is true then the corresponding block will run

if (false) {
    console.log("im true")
  } else {
    console.log("im false")
  }
  
  // example 2
  
  const a = 3;
  if (a === 5) {
    console.log('a is 5');
  } else if (a === 4) {
    console.log('a is 4');
  } else if (a === 3) {
    console.log('a is 3');
  } else {
    console.log('a is not 5, 4, or 3');
  }