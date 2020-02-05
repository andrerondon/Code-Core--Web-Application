// We want to create a function that accepts a string as an argument
// The function will check if all brackets within the string are valid brackets.
// Valid brackets are parenthesis that have been successfully closed. IE. all "(" must have a closing ")"

function checkBrackets(str) {
    const openingBraces = [];
    for (let i = 0; i < str.length; i++) {
      // console.log("iteration: ", i);
      // console.log(`str[${i}] = ${str[i]}`);
      if (str[i] === "(") {
        openingBraces.push(str[i]);
      } else if (str[i] === ")") {
        const poppedBrace = openingBraces.pop(); // [].pop() will remove the last element from an array and return it
        // console.log("poppedBrace: ", poppedBrace);
        if (!poppedBrace) { //
          return false;
        }
      }
      // console.log("==============");
    }

    // console.log("openingBraces length: ", openingBraces.length);
    if (openingBraces.length !== 0) {
      return false
    } else {
      return true;
    }
  }
  
  // test cases
  console.log(
    checkBrackets("((())") // false
    )
  checkBrackets("))") // false
  checkBrackets("(())") // true
  checkBrackets("count)(") // false
  checkBrackets("count()") // true
  checkBrackets("count("); // false
  checkBrackets("count)"); // false
  checkBrackets("()()"); // true
  checkBrackets("abc"); // true