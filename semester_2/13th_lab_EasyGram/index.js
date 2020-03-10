const express = require('express')
const logger = require('morgan')

const app = express();

app.use(logger('dev'))

app.set('view engine', 'ejs')
app.set('views', 'views');

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('welcome')
})

app.get('/users/new', (req, res) => {
  res.render('users/newUser.ejs')
})

app.post('/users', (req, res) => {
  console.log(req.body)
  res.send(`thank you ${req.body.First_name} ${req.body.Last_name}`)
  res.render('users/newUser.ejs')
})

// app.get('/users/new', (req, res) => {
//   res.render('users/new.ejs')
// })

// app.post('/users', (req, res) => {
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


const PORT = 4200
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
  console.log(`Server Listening on ${DOMAIN}:${PORT}`)
})