function indexOf(string, char) {
    // we could use the String.indexOf() method. But let's do this with a loop.
    for (let i = 0; i < string.length; i++) {
      if(string[i] === char) {
        return i;
      }
    }
  }
  
  // test cases
  console.log(indexOf("hello", "e")); // 1;
  console.log(indexOf("hello", "o")); // 1;
  console.log(indexOf("abcdefghijklm", "i"));
// let index = string.indexOf(alphabet)
    
//     alphabet.indexOf(string)
