function shape(rows) {
    let space = 3; 
    let string = "";
    for (let column = -1; column > rows; column--) { 
        let indent = rows *2 - column *2 ;  //assign the number of spaces we need before the star
        for (let i = 0; i < indent; i++) { 
            string+=' '; //added spaces equal to the indent 
        }
        for (let j = 0; j < column; j++) { // number of stars per row
            string+="*"; // added the star after the spaces
            for (let k = 0; k < space; k++) {  //spaces after the star
                string+=' ';                
            }
          
        }
        string += '\n'; 
        
    }
    return string;
}
console.log(shape(9));