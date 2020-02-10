function delay(ms, val) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (val === 'green') {
        rej(val);
      }
      res(val);
    }, ms);
  })
}

module.exports = delay;

delay(2000, "blue")
  .then(value => { // value = "blue"
    console.log(value);
    return delay(1000, "red");
  }) // if thenable returns a promise it can be handled by the next then()
  .then(value => { // value = "red"
    console.log(value);
  })

// output is the same but this way is bad because we're nesting promises instead of chaining them.
delay(2000, "blue")
  .then(value => {
    console.log(value);
    delay(1000, "red")
      .then(value => {
        console.log(value);
      })
  })