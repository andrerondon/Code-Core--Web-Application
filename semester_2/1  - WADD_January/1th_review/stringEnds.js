// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending){
  return str.endsWith(ending);
}

function solution(str, ending){
  if (typeof(str) != "string" || typeof(ending) != "string"){
    return "wrong type";
  }
   
  if (ending.length>str.length){
    return false;
  }
  const newArr = [] 
  const seconArr = []
  for (let i = 0; i < str.length; i++)
    newArr.push(str[i])
  
  for (let j = 0; j < ending.length; j++)
    seconArr.push(str[j])
  
  if (newArr != seconArr){
    return false
  }
}
console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));
