function drawMyTrinagle(rows){
    let star = "";
    let spaces = 4;
    let column = 1;
    while (column <= rows){
        let indent = rows * 4 - star * 4;
            for (let i = 0; i < column; i++){
            star +=' ';
        }
            for (let j = 0; j < spaces; j++){
                star += " * ";
            }
           

    star += '\n'; 
    column++; 
           
    }
   return star


}
console.log(drawMyTrinagle(9));

