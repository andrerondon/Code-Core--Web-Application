const fsPromises = require('fs').promises
const fs = require('fs')
// Promises workshop
// https://www.youtube.com/watch?v=RvYYCGs45L4
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// The most popular way to deal with asynchronous actions in JavaScript

// Promise is a constructor used to create instances of Promises

// fs.readdir() returns a promise https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options

const animalsDir = fsPromises.readdir('./animals')

// all promises are thenable, which means you can chain .then()

// the promise will resolve an array of all the file names in the directory
animalsDir.then(filenames => { // the .then() method accepts a callback function. The argument to the callback function is determined by whatever value the promise resolves.
  
  // Promise.all() is a function that accepts an array of promises. It will resolve all the promises and then return a new promise with the results of the array of promises

  // filenames is an array that looks like ['./cat.js', './dog.js', './monkey.js']
  return Promise.all([
    // fsPromises.readFile return promises that resolve the data within each file
    fsPromises.readFile(`${'./animals'}/${filenames[0]}`, {encoding: 'utf8'}),
    fsPromises.readFile(`${'./animals'}/${filenames[1]}`, {encoding: 'utf8'}),
    fsPromises.readFile(`${'./animals'}/${filenames[2]}`, {encoding: 'utf8'})
  ])
}).then(filesData => {
  // because of Promise.all filesData in this thenable is an array of all the resolved promises passed to Promise.all
  console.log(filesData)
})

fsPromises.readFile('./animals/cat.js', {encoding: 'utf8'})
  .then(data => {
    console.log(data)
  })

// fs.readdir('./animals', (filenames) => {
//   filenames.forEach(name => {
//     console.log(name)
//   })
// })

// new Promise((resolve, reject) => {
//   fs.readdir('./animals', (err, filenames) => {
//     if (err) {
//       reject(err)
//     }
//     resolve(filenames)
//   })
// }).then((filenames) => {
//   filenames.forEach(name => {
//     console.log(name)
//   })
// })