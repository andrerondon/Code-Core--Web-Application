Remove Duplicates from an Array (15%):
Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

using .includes
function removeDups(arr) {
  const noDuplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (!noDuplicates.includes(arr[i])) {
      noDuplicates.push(arr[i])
    }
  }
  return noDuplicates;
}

//using nested loop

function removeDups(arr) {
    const noDuplicates = [];
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];
      if (noDuplicates.length === 0) {
        noDuplicates.push(currentElement);
      }
      for (let j = 0; j <= noDuplicates.length; j++) {
        //console.log(noDuplicates[j], currentElement);
        if (noDuplicates[j] === currentElement) {
          break;
        }
        noDuplicates.push(currentElement);
      }
    }
    return noDuplicates;
  }
  
  // Examples
  console.log(removeDups([1, 0, 1, 0]));
  
  console.log(removeDups(["The", "big", "cat"]));
  
  // removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]