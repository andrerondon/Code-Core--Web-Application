// Lab - Letters Printing
// Write a piece of Javascript code that prints letters from a to z as such:

// a

// bb

// ccc

// dddd

// eeeee

// ....

// [hint]: You can get a letter using String.fromCharCode(i) where i is a number. If i is 65 then the letter is A

function letterPrinting(letter){
let newString = ''
for (let i = 0; i < letter.length; i ++){
    newString += letter[i] + letter[i].repeat(i) + '\n';
  
}
return newString
}

console.log(letterPrinting('abcdefghijlmno'));
