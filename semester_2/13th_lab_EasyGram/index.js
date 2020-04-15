const express = require('express')
const logger = require('morgan')
const methodOverride = require('method-override')
const cookieSession = require('cookie-session')
const usersRouter = require('./routes/users')
const gramsRouter = require('./routes/grams')
const welcomeRouter = require('./routes/welcomeRouter')


const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(logger('dev'))
app.set('view engine', 'ejs') // sets the "view engine" configuration to use 'ejs'. IE Telling ExpressJS to use EJS as our views
app.set('views', 'views') // tell express our view files are in a directory called views

app.use(cookieSession({
  name: 'session', // this is the key of the cookie
  secret: 'supersecret', // used to sign our cookie
  maxAge: 24 * 60 * 60 * 1000 // to expire expire the cookie after 1 day
}))

app.use(methodOverride((req, res) => {
  if (req.body && req.body._method) {
    const method = req.body._method
    return method
  }
}))



//  ////// Routers /////////////

app.use('/users', usersRouter)
app.use('/grams', gramsRouter)

app.use('/', welcomeRouter)
// app.get('/', (req, res) => {
//   res.render('welcome')
// })
app.get('/', (req, res) => {
  console.log(req.cookies) 
  res.render('welcome')
  
})

const PORT = 4200
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
  console.log(`Server Listening on ${DOMAIN}:${PORT}`)
})
