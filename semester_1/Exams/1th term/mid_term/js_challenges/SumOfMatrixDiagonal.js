
// Write a function to find sum of matrix main diagonal and secondary diagonal

// // Main Diagonal
// // (1s represent the main diagonal below)
// [
//     [ 1 0 0],
//     [ 0 1 0],
//     [ 0 0 1]
// ]
// // Secondary Diagonal
// // (1s represent the secondary diagonal below)
// [
//     [ 0 0 1],
//     [ 0 1 0],
//     [ 1 0 0]
// ]
// Hint: You might need to use nested loops and think of array indexes as shown below

// [ 00    01  02 ],
// [ 10    11  12 ],
// [ 20    21  22 ]



function diagonals(matrix){    
    let firstDignal = 0;
    let secDignal = 0;  
      for(let i=0; i<matrix.length; i++){       
         for(let  z=0; z<matrix.length; z++){        
            if(i === z) { 
                firstDignal += matrix[i][z];
            }         
            if(i + z === matrix.length - 1){   
                secDignal += matrix[i][z];
            }      
          } 
      }    
       return firstDignal + secDignal;
    }
    
    console.log(diagonals([
        [ 00, 01, 02 ],
        [ 10, 11, 12 ],
        [ 20, 21, 22 ]]));




