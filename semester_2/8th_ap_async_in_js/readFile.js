const fs = require('fs');



function readFile(path, options) {
  return new Promise((res, rej) => {
    // we want to promisify fs.readFile
    // we invoke fs.readFile
    fs.readFile(path, options, (err, data) => {
      // inside of the callback is where we resolve or reject
      if (err) {
        rej(err);
      }
      res(data);
    });
  })
}

readFile('./coinFlip.js', {encoding: 'utf8'})
  .then( data => {
    console.log(data);
  })