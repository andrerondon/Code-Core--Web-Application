const express = require('express')
const logger = require('morgan')
const usersRouter = require('./routes/grams')
// const gramsRouter = require('./routes/grams')

const app = express();

// app.set('view engine', 'ejs') // sets the "view engine" configuration to use 'ejs'. IE Telling ExpressJS to use EJS as our views
// app.set('views', 'views') // tell express our view files are in a directory called views

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

////////Routers/////////////

app.use('/grams', usersRouter)

app.use('/', usersRouter)
// app.use('/events', eventsRouter)
// app.get('/', (req, res) => {
//   res.render('welcome')
// })

// app.get('/', (req, res) => {
//   console.log(req.query)
//   res.render('welcome.ejs')
// })

app.use('/users/new', usersRouter)


// app.get('/users/new', (req, res) => {
//   res.render('users/newProfile.ejs')
// })

// app.post('/users', (req, res) => {
//   console.log(req.body)
//   res.send(`thank you ${req.body.First_name} ${req.body.Last_name}`)
//   res.render('users/newProfile.ejs')
// })

/////// Brandon Solution //////


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