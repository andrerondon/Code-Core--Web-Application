const express = require('express')
const users = express.Router()

// router.get('/', users)
users.get('/new', (req, res) => {
    res.render('users/new.ejs')
  })

// router.post('/', users)
users.post('/new', (req, res) => {
  const
  { firstname,
    lastname,
    email,
    password,
    passwordConfirmation
  } = req.body
  if (password === passwordConfirmation) {
    res.send(`
    Thanks for signing up ${firstname} ${lastname}! We'll make sure we keep your password: ${password} and email: ${email} safe!
    `)
  } else {
    res.render('users/new.ejs')
  }
})



module.exports = router
