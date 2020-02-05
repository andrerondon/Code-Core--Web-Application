
// function drawTriangle(number) {
//     for (let i = 1; i <= number; i++) {
//       console.log(" ".repeat(number - i) + "* ".repeat(i));
//     };
//   }
  
//   drawTriangle(6)


function drawTriangle(rows){
   let triangle = " "
   let spaces = 0;
   let iteration = 1;
   while (iteration <= rows){
       let indent = rows * 4 - iteration * 4;
       for (let i = 0; i < indent; i++){
           triangle += " ";
       }
       for (let j=0; j<iteration; j++){
           triangle += "*"
           for (let k = 0; k < spaces; k++){
               triangle += " ";
           }
           spaces = 7;
       }
       triangle += "\n"
    //    indent -= 4;
       iteration ++
   }
   console.log(triangle);
        
}
drawTriangle(6);

