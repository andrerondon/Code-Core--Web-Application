

// Write a function that accepts a string as an argument. It will return the string without vowels. Use arrays in your solution! Make sure you account for capital letters as well!

// removeVowels("hello") // returns hll
// removeVowels("HellO") // returns hll

function removevowel(string){
    let arr = [];
    for (let i = 0; i < string.length; i++){
        let element = string[i];
        if(element !=='a' && element !=='b'){
        arr.push(element)
        // console.log(arr);
        }
        
        
    }
    return arr.join('');
  
    
}
console.log(removevowel("helloa"));

function name(params) {
    let vowels = ['a', 'e']
    let newArr = params.split("")
    return params.filter((el)=> !vowels.includes(el))
    
}

console.log(name("helloa"));