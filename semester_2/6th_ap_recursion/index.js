// A recursive function is a function that calls itself

// All recursive functions must have a termination case. When this case is met the recursive function will not call itself allowing us to exit from the function

// A recursive function example

function sum(arr) {
    // termination case
    if (arr.length === 0) {
      // do not call the recursive function again
      return 0; // no more numbers in the array... adding zero
    }
    // recursive case
    // we call the recursive function again
    // every recursive case call we must get closer to the termination case
    return arr[0] + sum(arr.slice(1));
    // on the first iteration:
    // 1 + sum([2,3,4,5]);
  }
  
  function factorial(n) {
    // termination condition
    if (n === 0) {
      return 1;
    }
    // invoke factorial with n - 1;
    return n * factorial(n - 1);
  }
  
  factorial(5); // 120
  // 5 * 4 * 3 * 2 * 1;
  
  function recursiveReverseString(str) {
    if (str.length === 0) {
      return ""
    }
    return str[str.length - 1] + recursiveReverseString(str.slice(0, -1));
    // "o" + "hell"
  }
  
  function iterativeReverseString(str) {
    let reveredString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reveredString += str[i];
    }
    return reveredString;
  }
  
  let testString = '';
  
  for (let i = 8948; i >= 0; i--) {
    testString += 'a';
  }
  
  console.time('recursive');
  recursiveReverseString(testString);
  console.timeEnd('recursive');
  
  console.time('iterative');
  iterativeReverseString(testString);
  console.timeEnd('iterative');