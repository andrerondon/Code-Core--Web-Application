const fs = require('fs');
const fsPromises = require('fs').promises;

// starting to get into callback hell... we're nesting asynchronous logic a lot
// 1. hard to understand
// 2. a lot of scopes so we have to becareful with variable names
fs.readdir('./readMe', (err, files) => { // 1) read the directory
  // files = ['one.txt', 'two.txt'];
  files.forEach(file => {
    fs.readFile(`./readMe/${file}`, {encoding: 'utf8'}, (err, data) => { // 2) read the files within the directory
      fs.writeFile(`./readMe/copies/${file}`, data, (err) => { // 3) write the file to a copy
        console.log('wrote file');
      })
    })
  })
})

fsPromises.readdir('./readMe')
  .then(files => {
    return Promise.all(
      files.map(file => {
        return fsPromises.readFile(`./readMe/${file}`, {encoding: 'utf8'})
      })
    )
  })
  .then(data => {
    fs.writeFile(`./readMe/copies/${file}`, data);
  })
  .then(() => {
    console.log('wrote file')
  })
  .catch(err => {
    console.log(err);
  })
