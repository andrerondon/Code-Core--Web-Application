const addOne = function(num){
    return num + 1
}
// console.log(addOne(8));


function call(num, func) {
    return func(num)
  }
  
  console.log(call(8,addOne))