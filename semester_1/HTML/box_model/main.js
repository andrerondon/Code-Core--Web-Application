// Addition function
function add(x, y) {
    return x + y;
  }
  let firstValue = 8;
  let secondValue = 2;
  console.log(`${firstValue} + ${secondValue} = `, add(firstValue, secondValue));
  
  // Subtraction function
  function sub(x, y) {
    return x - y;
  }
  
  console.log(`${firstValue} - ${secondValue} = `, sub(firstValue, secondValue));
  
  // Multiplication
  function mult(x, y) {
    return x * y;
  }
  
  console.log(`${firstValue} * ${secondValue} = `, mult(firstValue, secondValue));
  
  // Division
  function division(x, y) {
    return x / y;
  }
  
  console.log(
    `${firstValue} / ${secondValue} = `,
    division(firstValue, secondValue)
  );
  
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // find the summation of the above array
  
  // first, we need to loop through array and get each element by index
  // second, for each element that we are getting, add it to the result
  // third, when you get to the last index, read it then leave the for...loop
  // fourth and finally return the result
  let sum = 0;
  let multiply = 1;
  // for (let index = 0; index < myArray.length; index++) {
  //   //   console.log(`index = ${index} --- myArray[${index}] = ${myArray[index]}`);
  //   sum = sum + myArray[index];
  //   multiply = multiply * myArray[index];
  // }
  
  let index = myArray.length - 1;
  while (index >= 0) {
    sum = sum + myArray[index];
    multiply = multiply * myArray[index];
    index = index - 1;
  }
  
  // console.log("sum of myArray: ", sum);
  console.log("multiplication of myArray: ", multiply);
  
  function summation(arr) {
    let sum = 0;
    let index = arr.length - 1;
    while (index >= 0) {
      sum = sum + arr[index];
      multiply = multiply * arr[index];
      index = index - 1;
    }
    return sum;
  }
  let myShortArray = [1, 2, 3, 4];
  console.log("sum of myArray: ", summation(myShortArray));
  
  // doing multiplication table with two for...loops
  for (let row = 1; row <= 9; row++) {
    let r = [];
    console.log("rowNumber: ", row);
    for (let column = 1; column <= 9; column++) {
      // console.log("columnNumber: ", column);
      r.push(row * column);
    }
    console.log(r);
  }
  
  // assignment: doing multiplication table with one for...loop
  
  // add 0 to 99 and log it to console
  
  let sum1 = 0;
  for (let i = 0; i <= 99; i++) {
    sum1 = sum1 + i;
  }
  console.log(sum1);
  
  // Print all numbers that are divisible by 5 from 0 to 100;
  // step 1: I need to loop through numbers from 0 to 100
  // step 2: only print the numbers that are divisible by 5
  
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
  
  // Scope
  
  // array methods
  
  // why don't we change the html structure instead of working more on CSS specificity
  
  // a proper html pattern for webpages
  
  