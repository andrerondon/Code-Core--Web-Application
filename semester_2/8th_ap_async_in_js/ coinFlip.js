// Creating Promises

// Promise constructor

const DELAY = 2000;
const THREE_SECONDS = 3000;

const pinkyPromise = new Promise((resolve, reject) => { 
  // promises are initialized with a callback function
  // the callback has two arguments res and rej, both are functions
  // both res and rej accept one arugment which can be anything.
  // reject is for bad values
  // resolve is for good values
  if (DELAY > THREE_SECONDS) {
    reject('Took too long');
  }
  setTimeout(() => {
    resolve("Thank you for keeping your promise");
  }, DELAY)
});

console.log(pinkyPromise);
// Promises can have 3 states
// 1) resolved 👍
// 2) rejected 👎
// 3) pending ❓