const input = process.argv[2];
let resultString='';
// console.log(input);
for (let a= 0; a< input.length; a++){
    if( a % 2 ===0){
    resultString= resultString + input[a];
    }else {
    resultString= resultString + input[a].toUpperCase();
}
}
console.log(resultString);
