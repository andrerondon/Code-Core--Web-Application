// Write a method that returns the maximum number in an array in two ways without using Math.max or Array#sort:

// Using iteration.
// Examples:

// maximum([ 213, 12, 66, 999 ]); # should return 999
// maximum([ 1, 2, 3, 11, 3, 6, 5 ]); # should return 11

function maximum (numbers){
    let maxValue = [];
    for(let i=0 ;i < numbers.length;i++){
      if(numbers[i] > maxValue){
        maxValue = numbers[i];
      }
    }
    return maxValue;
  }
  console.log(maximum([1, 2, 3, 11, 3, 6, 5]));
  