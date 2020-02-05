// Write a function that will recieve a array of letters ["a", "b", "a", "c", "d", "d"];
// This function will return an object with the count of each letter

function countLetters(arr) {
    const counts = {};
    for (let i = 0; i < arr.length; i++ ) {
      let letter = arr[i];
      if (counts[letter]) {
        counts[letter] += 1;  // counts[letter]= counts[letter] + 1
      } else {
        counts[letter] = 1;
      }
    }
    return counts;
  }

  
  
  // test cases
  console.log(countLetters(["a", "b", "a", "c", "d", "d"])); // { a: 2, b: 1, c: 1, d: 2 };