
const fs = require('fs');


fs.readFile('./marked.csv', {encoding: 'utf8'}, (a, data) => {
  if (a) throw err  
  let arr = data.split("\n")
  let newArr = []
  for (let i = 0; i < arr.length; i ++){
      if(arr[i].includes("no"))
      newArr.push(arr[i]+"\n")  
    
      fs.writeFile('./CSV.txt', newArr , {encoding: 'utf8'}, (err) => {
        if(err) {
          throw new Error;
        }
      
      })

  }
  
  console.log(newArr);

 
  
})


// use fs.writeFile to write a file
// 1st argument is the path: './filename'
// 2nd argument is the data: string
// 3rd argument is a optional object
// 4th(3rd) argument is a callback



