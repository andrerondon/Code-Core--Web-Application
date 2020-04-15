const express = require('express')

const router = express.Router()

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  const oneDay = 1000 * 60 * 60 * 24 // quick maths to calculate amount of milliseconds in one day
  res.cookie('user', 'jon snow', { maxAge: oneDay })
  res.send(`Thanks for login`)
})

// When a user DELETE "/session"
router.delete('/session', (req, res) => {
  res.clearCookie('user') // res.clearCookie will tell the browser to remove a cookie from it's store
  res.send('logged out')
})

module.exports = router

// router is like a sub-app in your express application
// make sure you're mounting router on the main express app.


// A request to your server contains 2 different parts. A combination of VERB and PATH is a resource
// 1) A HTTP VERB
// 2) A PATH