// Middleware is a callback function that has access to the `request` and `response` objects. It's mainly used to change those objects or invoke additional code.

// Middleware are just functions with 3 arguments
// 1) request object
// 2) response object
// 3) next function

function noMonkey (req, res, next) {
    const inputs = Object.keys(req.body)
    let foundMonkey = false
    inputs.forEach(input => {
      if (req.body[input].includes('monkey')) {
        foundMonkey = true
      }
    })
    if (foundMonkey) {
      return res.send('No Monkey')
    }
    next()
  }
  
  module.exports = noMonkey
  