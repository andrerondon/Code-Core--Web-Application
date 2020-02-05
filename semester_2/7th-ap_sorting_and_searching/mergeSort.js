// Merge Sort
// Uses a divide and conquer technique to split lists in half until they are as small as possible
// Then it merges the lists together

function mergeSort(arr) {
    const sortedArray = [...arr];
    // termination
    if (sortedArray.length < 2) {
      return arr;
    }
    // recursive
    const middle = Math.floor(arr.length / 2);
    const left = sortedArray.slice(0, middle);
    const right = sortedArray.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  // [5,1,4,3,9,2,10, -23]
  // [5, 1, 4, 3]                     |[9, 2, 10, -23]
  // [5, 1] [4, 3]                    |[9, 2] [10, -23]
  // [5] [1] [4] [3]                         |[9] [2] [10] [-23]
  // [1, 5] [3, 4]
  function merge(left, right) {
    const mergedArr = [];
    while(left.length && right.length) {
      if (left[0] >= right[0]) {
        mergedArr.push(right.shift());
      } else {
        mergedArr.push(left.shift());
      }
    }
    return mergedArr.concat(left, right);
  }
  
  console.log(mergeSort([5,1,4,3,9,2,10, -23])); 