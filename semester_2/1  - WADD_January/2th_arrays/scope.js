// Scope is the accessibility of variables with our code
// It is scoped lexically meaning where you place variables and \
// function declarations is how scope is determined
// const and let variables are scoped to the surrounding {} block

function func() {
    if (true) {
      const a = 123
      let b = 456
      console.log('within if block:', a, b)
    }
    console.log('within function but outside if block:', a, b)
  }
  
  func() // 'within if block:' 123 456
  // a and b are not defined
  
  function func2() {
    const a = 123
    let b = 456
    if (true) {
      console.log('within if block:', a, b)
    }
    console.log('within function but outside if block:', a, b)
  }
  
  func2()
  