const express = require('express')
const logger = require('morgan')
const methodOverride = require('method-override')
const usersRouter = require('./routes/users')
const gramsRouter = require('./routes/grams')
const welcomeRouter = require('./routes/welcomeRouter')

const app = express()

app.use(logger('dev'))
app.set('view engine', 'ejs') // sets the "view engine" configuration to use 'ejs'. IE Telling ExpressJS to use EJS as our views
app.set('views', 'views') // tell express our view files are in a directory called views

app.use(methodOverride((req, res) => {
  if (req.body && req.body._method) {
    const method = req.body._method
    return method
  }
}))

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//  ////// Routers /////////////

app.use('/users', usersRouter)
app.use('/grams', gramsRouter)

app.use('/', welcomeRouter)
// app.get('/', (req, res) => {
//   res.render('welcome')
// })

const PORT = 4200
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
  console.log(`Server Listening on ${DOMAIN}:${PORT}`)
})
