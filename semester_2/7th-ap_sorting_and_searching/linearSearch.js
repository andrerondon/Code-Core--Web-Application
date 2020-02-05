// Linear Search is a searching algorithm to find something in a list
// It is the simplest search
// Will look through the items of a list one by one starting from the beginning until it finds the item


const arr = [1,2,3,5,6,7,1,23,4,5]

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return i;
    }
  }
}

console.log(linearSearch(arr, 7)); //5 return the index of the item we searched for