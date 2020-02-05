function shape(rows) {
    let space = 3; 
    let string = "";
    let column = 1;
    while (column <= rows) { 
        let indent = rows *4 - column *4 ;  //assign the number of spaces we need before the star
        for (let i = 0; i < indent; i++) { 
            string+=' '; //added spaces equal to the indent 
        }
        for (let j = 0; j < column; j++) { // number of stars per row
            string+="*"; // added the star after the spaces
            for (let k = 0; k < space; k++) {  //spaces after the star
                string+=' ';                
            }
            
            // space = 3; // spaces between the stars
        }
        string += '\n'; // changed to the new line
        column++; 
    }
    return string;
}
console.log(shape(9));




// const makeShape = (num) => {
//     const space = "    ";
//     const star = "*";
//     let triangle = "";
//     for (let i = 1; i <= num; i++) {
//       // last row condition
//       if (i === num) {
//         for (let j = 1; j <= num; j++) {
//           triangle += (star + space);
//         };
//       } else {
//         // spacing with out stars
//         for (let j = 1; j <= (num - i); j++) {
//           triangle += (" " + space);
//         };
//         // spacing with stars
//         for (let j = 1; j <= i; j++) {
//           triangle += (star + space);
//         };
//         triangle += "\n";
//       }
//     }
//     return triangle;
//   }
//   console.log(makeShape(20));








// function shapeOne(string){
//   const space = "   ";
//   const star = "*";
//   const column = "";

//   for (let i = 1; i < string; i++){
//     if ( i === string) {
//       for (j = 1; j<= string; j++){
//         column += (star + space);
//       };
//     } else {
//       for (let j = 1; j < (string - i); j++){
//         column += (" " + space);
//       };
//       for (let j = 1; j < (string - i); j++){
//       column += (star + space);
//     };

//   triangle += "\n";
//     }
//   }

// return column;
// }
// console.log(shapeOne(20));
