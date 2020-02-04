function add(n, n2) {
    return n + n2;
  }
  
  // module is a object attatched to the global scope
  // it has a property "exports". Whatever "exports" is set to are the pieces of code you load into other files
  module.exports = add;
  
  // this file is exporting the add function


  
  