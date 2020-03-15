const express = require('express')

const router = express.Router()
const users = require('../controllers')

router.post('/new', users)
// router.post('/', (req, res) => {
//   const 
//   { firstname,
//     lastname,
//     email,
//     password,
//     passwordConfirmation
//   } = req.body
//   if (password === passwordConfirmation) {
//     res.send(`
//     Thanks for signing up ${firstname} ${lastname}! We'll make sure we keep your password: ${password} and email: ${email} safe!
//     `)
//   } else {
//     res.render('users/new.ejs')
//   }
// })

router.get('/new', users)
// router.get('/', (req, res) => {
//   res.render('users/new.ejs')
// })

module.exports = router