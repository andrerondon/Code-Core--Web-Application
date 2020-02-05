// Varible shadowing demo

// a is defined in an outer scope
let a = 'a';

{
  // a is also defined in a nested scope
  let a = 'b';
  // this variable here will shadow the variable in the outer scope
  console.log('inside a nested scope', a);

  {
    // the variable a inside of this scope has shadowed the variable a in outer scopes
    let a = 'c';
    console.log(a);
  }
}
console.log('in outer scope', a);