// A callback is a function passed into 
// another function as an argument (often asynchronously)

// const callback = () => {
//   console.log('callback starting...') // 3rd
//   setTimeout(() => {
//     console.log('first setTimeout') // 4th
//     setTimeout(() => {
//       console.log('second setTimeout') // 5th
//     }, 3000)
//   }, 4000)
// }

// console.log('Before setTimeout') // 1st

// setTimeout(callback, 0)

// console.log('After setTimeout') // 2nd

// Synchronous callback example
const medals = ["gold", "silver", "bronze"]

function printElements(array) {
  console.log("Before forEach") // 1st

  array.forEach(element => {
    console.log(element) // 2nd
  })

  console.log("After forEach") // 3rd

}

printElements(medals)
