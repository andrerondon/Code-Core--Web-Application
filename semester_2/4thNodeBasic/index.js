// Scope review
// The way we right modern javascript, using `let` and `const` makes every variable declaration block scoped

let outerScope = 'hello there';
{
  let a = 'abc';
  // I only  have access to this variable within this scope
  {
    let outerScope = 'im in the same scope'
    console.log(outerScope);
  }
}

// console.log(a);

