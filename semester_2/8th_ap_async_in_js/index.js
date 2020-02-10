const fs = require('fs');

fs.readdir('./readMe', (err, files) => { // 1) read the directory
  // files = ['one.txt', 'two.txt'];
  files.forEach(file => {
    fs.readFile(`./readMe/${file}`, {encoding: 'utf8'}, (err, data) => { // 2) read the files within the directory
      fs.writeFile(`./readMe/copies/${file}`, data, () => { // 3) write the file to a copy
        console.log('wrote file');
      })
    })
  })
})