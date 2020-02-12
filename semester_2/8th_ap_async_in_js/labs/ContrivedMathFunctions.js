

 
function add(x, y){
    return new Promise ((res, rej)=>{
        if(typeof rej !== Number){
            return "must provide a number"
        } else {
            setTimeout(() => {
                const sum = x + y
                res(sum)  
            }); 
        }
       
    })
}


add(9)

  .then(value => add(9, value)) // value is 9

  .then(value => add(2, value)) // value is 18

  .then(value => mult(5, value)) // value is 20

  .then(value => div(value, 10)) // r is 100

  .then(console.log); // logs 10

  console.log(add.then(9, 0));