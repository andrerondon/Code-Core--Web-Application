function delay(ms) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("delay done");
      }, ms);
    })
  }
  
  delay(2000)
    .then(value => {
      console.log('waited 2 seconds');
      return delay(3000);
    })
    .then(value => {
      console.log('waited another 3 seconds');
    })
  
  delay(3000)
    .then(value => {
      console.log('waited 3 seconds')
    })