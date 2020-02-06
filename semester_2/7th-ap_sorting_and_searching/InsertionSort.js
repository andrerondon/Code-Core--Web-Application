function insertionSort (arr){
    const copyArray = [...arr];
    for (let i = 1; i < copyArray.length; i++) {
        let key = copyArray[i];
        let j = i - 1;
        while (j >= 0 && copyArray[j] > key) {
            copyArray[j + 1] = copyArray[j];
            j = j - 1;
        }
        copyArray[j + 1] = key;
    }
    return copyArray;
};

console.log(insertionSort([15,42,1,67,104,2,2,2]));