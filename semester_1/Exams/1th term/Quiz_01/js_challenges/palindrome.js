// Task:

// Write a function that checks either the given word is a palindrome or not?

// Examples:

// isPalindrome(“madam”) ➞ true

// isPalindrome(“cat”) ➞ false

// isPalindrome(“10801”) ➞ true


// function checkPalindrom(palindrom)
// {
//     let newstring = "";
//     for( let i = palindrom.length; i > 0; i-- ){
//      if (newstring(palindrom[i])
//         return true
     
        
//         }else{
//             return false;
            
//         }
//     }
//     return palindrom
// }
// console.log(checkPalindrom('eye'));
// console.log(checkPalindrom('madam'));
// console.log(checkPalindrom('10801'));
// console.log(checkPalindrom('ralr'));


// Palindrome (15%):
// Definition:
// A palindrome is a word, number, phrase, or another sequence of characters which reads the same backward as forward, such as or madam or racecar or the number 10801

function isPalindrome(x) {
  let reversedString = "";
  for (let i = x.length -1 ; i >= 0; i--) {
    reversedString += x[i];
  }
  if (x === reversedString) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("apple"));
console.log(isPalindrome("aaaaaa"));

// Task:
// Write a function that checks either the given word is a palindrome or not?