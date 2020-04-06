// this middleware will set req.session.sessionFlash as a global variable `sessionFlash`
// and it will clear the sessionFlash from the session

// in our views all we need to do is use sessionFlash to display errors
function sessionFlash (req, res, next) {
    res.locals.sessionFlash = {}
    if (req.session && req.session.sessionFlash) {
      res.locals.sessionFlash = req.session.sessionFlash
      req.session.sessionFlash = {}
    }
    next()
  }
  
  module.exports = sessionFlash
  