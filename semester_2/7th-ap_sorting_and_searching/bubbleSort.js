// bubbleSort
// bubble sort is a simplest sorting algorithm
// it works by comparing two consecutive numbers. If number a > b we swap a b.
// we know the list is sorted if we manage to go through the entire list without swapping values

function bubbleSort(arr) {
    let isSorted = false;
    let sortedArr = [...arr];
    while(!isSorted) {
      // do logic
      isSorted = true;
      for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] > sortedArr[i + 1]) {
          // logic used to swap a b
          const a = sortedArr[i];
          sortedArr[i] = sortedArr[i + 1];
          sortedArr[i + 1] = a;
          isSorted = false;
        }
      }
    }
    return sortedArr
  }
  
  console.log(bubbleSort([1, 23, 2, 56, 9, 8, 10, 100])); // [1, 2, 8, 9, 10, 23, 56, 100];
  