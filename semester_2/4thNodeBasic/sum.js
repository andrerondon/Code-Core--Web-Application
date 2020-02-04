// There is a special function attatched to the global scope used to load modules

const a = require('./add.js');
// require accepts a path to a file. It will load in the `module.exports` from that file
// the path is relative

console.log(a(5, 5));

///
