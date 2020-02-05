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
  
  console.log(selectionSort([1, 23, 2, 56, 9, 8, 10, 100])); // [1, 2, 8, 9, 10, 23, 56, 100];