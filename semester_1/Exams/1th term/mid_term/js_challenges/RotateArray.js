// THIS IS MY BONUS



// Write a Javascript function to rotate an array

// Test Cases

// const arr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log(rotateArray(arr1));
// Output
// [ 
//     [ 1, 4, 7 ], 
//     [ 2, 5, 8 ], 
//     [ 3, 6, 9 ] 
// ]



function rotateArray(arr) {
    let innerArr = [];
    let rotatedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr[0].length) {
        innerArr.push(arr[j][i]);
        if (j == arr.length - 1) {
            i ++;
            rotatedArr.push(innerArr);
            j = 0;
            innerArr = [];
            continue;
        }
        j += 1;
    }
    return rotatedArr;
}
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
console.log(rotateArray(arr3));

// same solution with nest array


function rotateArray(arr) {
    let innerArr = [];
    let rotatedArr = [];
    // first solution with nested loops
      for (let i = 0; i < arr[0].length; i++) {
        innerArr = [];
        for (let j = 0; j < arr.length; j++) {
          innerArr.push(arr[j][i]);
        }
        rotatedArr.push(innerArr);
      }
      return rotatedArr;





