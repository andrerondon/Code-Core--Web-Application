const fs = require('fs').promises
// Promises workshop
// https://www.youtube.com/watch?v=RvYYCGs45L4
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// The most popular way to deal with asynchronous actions in JavaScript

// Promise is a constructor used to create instances of Promises

// fs.readdir() returns a promise https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options
const animalsDir = fs.readdir('./animals')

// all promises are thenable, which means you can chain .then()

animalsDir.then(filenames => { // the .then() method accepts a callback function. The argument to the callback function is determined by whatever value the promise resolves.
  
})


