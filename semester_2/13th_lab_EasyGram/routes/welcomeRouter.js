const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
    res.render('welcome.ejs')
  })

  router.get('/login', (req, res) => {
    res.render('sessions/new')
  })
  
  router.post('/login', (req, res) => {
    const oneDay = 1000 * 60 * 60 * 24 // quick maths to calculate amount of milliseconds in one day
    res.cookie('user', 'jon snow', { maxAge: oneDay })
    res.send(`Thanks for login`)
  })
  
  // When a user DELETE "/session"
  router.delete('/session', (req, res) => {
    res.clearCookie('users') // res.clearCookie will tell the browser to remove a cookie from it's store
    res.send('logged out')
  })

module.exports = router