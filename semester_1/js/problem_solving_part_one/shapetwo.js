function shape(rows) {
    let space = "   "; 
    let string = "";
    for (let column = 0; column < rows; column ++) { 
        let indent = rows *2 - column *2 ;  
        for (let i = 0; i < indent; i++) { 
            string+=' '; 
        }
        for (let j = 0; j < rows; j++) {
            string+="*" + space ; 
            // for (let k = 0; k < space; k++) { 
            //     string+=' ';                
            // }
            // space = 3; 
        }
        string += '\n'; 
    }
    return string;
}
console.log(shape(9));

// function shape (rows){
//     string = "";
//     spaces = 1; 
//      for(let i = 0; i< spaces; )

// }














