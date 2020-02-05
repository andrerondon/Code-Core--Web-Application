// JS Scopes

// A scope is where a variable can be accessed

// `let` and `const` are used to declare variables which have a block scope

// We do not use `var` to declare variables anymore. Because they are function scoped.

// Block scope example

// a is declared in a outer scope
let a = 'a';

{
  // we've created a variable here that will only live inside of this scope. It can also only be accessible within this scope
  let b = 'b';
  console.log(b);
}

console.log(a);
// console.log(b); // this will throw an error because the variable b only lived within that block's scope

// outer scope

{
  // inner scope
  // this block would have what is considered a inner scope
  // we have access to anything in a outer scope
  console.log('logging from inner scope')
  console.log(a);

  let c = 'c';
  // we can have as many scopes as we want
  {
    // this is an inner scope it will have access to c
    console.log(c);
    let d = 'd';
    // we still have access to `a` because it is in an outer scope
  }
  // in our outer scope we don't have access to d
}