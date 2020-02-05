

// // Write a function that accepts a string as an argument. It will return the string without vowels. Make sure you account for capital letters as well!

// // removeVowels("hello") // returns hll
// // removeVowels("HellO") // returns hll



// // obs: array methods that combine all elements together = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join



function removeVowels(string){
    const excludVowels ['a', 'e', 'i', 'o', 'u', ]
    for (let i = 0; i < string.lenght; i++){
            if ( arr[i] === "h") {
              return(i, 1); 
              
    }

}
console.log(vowelA(string));


Brandon

function removeVowels(word) {
    const noVowels = []; // empty array used to store all the charcters which are not vowels
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // all of the vowels
    for (let i = 0; i < word.length; i++) { // loop over all characters of the word
      if (!vowels.includes(word[i])) { // if the character is any of of the elements inside of `vowels`
        noVowels += (word[i]); //add it to our noVowels array
      }
    }
    // after this loop all non-vowel characters are added to noVowels
    return noVowels.join(""); // we join all the elements of `noVowels` and return it as a string.
  }
  console.log(removeVowels("Apple"));



  Guwrinder 

  function removevowel(string) {
    let word=[];
    for (let i = 0; i < string.length; i++) {
        let character=string[i];
        if (character !=='a' && character!=='e' && character!=='i' && character!=='o' && character!=='u') {
            word.push(character);
            
        }
    }
    return word.join('');
}
console.log(removevowel("hello"));