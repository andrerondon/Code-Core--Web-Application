function capitalizingString(str){
    let resultString = ''
    let secondString = ''
    for (let i = 0; i <= 0; i++){
        resultString += str[i].toUpperCase();
    }
    for (let j = 1; j <= str.length; j++){
        secondString += str[j];
        
    }
    return resultString + secondString
}
console.log(capitalizingString('abcdef'));