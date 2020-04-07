// this middleware will set req.session.sessionFlash as a global variable `sessionFlash`
// and it will clear the sessionFlash from the session

// in our views all we need to do is use sessionFlash to display errors
function sessionFlash (req, res, next) {
  res.locals.sessionFlash = {} // sets the res.locals.sessionFlash to an object so we do not get a "cannot set .something of undefined" error
  if (req.session && req.session.sessionFlash) { // checking if the session (from the cookie) has a sessionFlash property
    res.locals.sessionFlash = req.session.sessionFlash // if it does set a global variable `sessionFlash` to have the value from the cookie
    req.session.sessionFlash = {} // clear the messages from the session cookie
  }
  next()
}

module.exports = sessionFlash

// how this works:
// We take advantage of 2 differen things:
// 1) our session cookie - req.session
// - session cookie lives on the browser it can save stuff between requests
// 2) "global variables" - res.locals
// - lives server side allows us to access variables from anywhere between the request/response lifecycle

// Example flow:
// a) someone makes a request to save an event
// b) our controller denies the request
// c) in our controller we give an error message to req.session.sessionFlash (we attatch it to the cookie. This gets sent browser side) 
// d) we redirect them to a page -> makes a get request back to our server
// e) our sessionFlash middleware checks the cookie for `req.session.sessionFlash`
// f) saves the `req.session.sessionFlash` data to our global variables -> now they're accessable with in any view
// g) when we re-render any page we can display the `res.locals.sessionFlash` on the page
// h) we remove the message from the cookie
