const fs = require('fs');

// the fs module is a module built into NodeJS it allows us to do things with files on our machine.

// fs.readFile();
// this function is used to read the contents of a file
// the arguments are: 
// first is a path to the file: "./add.js"
// second is a optional object
// third is a callback

fs.readFile('./text.txt', {encoding: 'utf8'}, (a, data) => {
  if (a) {
    console.log(a);
    throw new Error('something bad happened')
  }
  console.log(data);
})

// use fs.writeFile to write a file
// 1st argument is the path: './filename'
// 2nd argument is the data: string
// 3rd argument is a optional object
// 4th(3rd) argument is a callback

fs.writeFile('./writtenByNodeJs.txt', "hello world", {encoding: 'utf8'}, (err) => {
  if(err) {
    console.log(err);
    throw new Error('Unable to write file, err:' + err);
  }
  console.log('written file!')
})
