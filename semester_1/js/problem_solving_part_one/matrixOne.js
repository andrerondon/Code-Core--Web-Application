
function sumUpDiagonals(matrix) {
    let sumDiagonals = 0;
   const matrixLength = matrix.length;
    for (let i = 0 ; i < matrixLength ; i++) {
        for (let j = i-1; j >=0 ; j--) {
           
            sumDiagonals += matrix[j][i];
           
        
        }
    }
   return sumDiagonals
}
console.log(sumUpDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));



// const upperDiagonalSum = (matrix) => {
// 	// how many rows
// 	const mtxLng = matrix.length;
// 	let sum = 0
// 	// look across row to find numbers in the upper diagonal
// 	for (let row = 0; row < mtxLng; row++) {
// 	  for (let column = 0; column < mtxLng; column++) {
// 		if (column <= row) {
// 		  // then sum stays the same
// 		  sum = sum
// 		} else {
// 		  // sum accumulates
// 		  sum += matrix[row][column];
// 		}
// 	  }
// 	}
// 	return sum
//   }
//   ​
//   console.log(upperDiagonalSum([[1, 2, 3 , [4, 5, 6], [7, 8, 9]])); // 11