function selectionSort(arr) {
        const copyArray = [...arr];
        let sorted = copyArray.length;
        for (let i = 0; i < sorted; i++) {
            let min = i;
            for (let j = i + 1; j < sorted; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = arr[i];
                arr[i] = arr[min];
                arr[min] = tmp;
            }
        }
        return arr;
    }
  
  console.log(selectionSort([199, 2003, 2, 506, 900, 8, 990010, 100])); // [1, 2, 8, 9, 10, 23, 56, 100];


  //////   brandon implementation

  function selectionSort(arr) {
    const sortedArr = [...arr];
    let subArrayIndex = 0;
    while(subArrayIndex < sortedArr.length) {
      let minValue = Infinity;
      let j = subArrayIndex;
      let minValueIndex;
      while(j < sortedArr.length) {
        if (sortedArr[j] < minValue) {
          minValue = sortedArr[j];
          minValueIndex = j;
        }
        j++
      }
      const currentZeroIndexValue = sortedArr[subArrayIndex];
      sortedArr[subArrayIndex] = minValue;
      sortedArr[minValueIndex] = currentZeroIndexValue;
      subArrayIndex++;
    }
    return sortedArr;
  }
  
  console.log(selectionSort([15,42,1,67,104,2,2,2]));