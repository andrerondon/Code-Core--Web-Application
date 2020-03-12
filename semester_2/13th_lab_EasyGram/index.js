const express = require('express')
const logger = require('morgan')
const usersRouter = require('./routes/users')
const gramsRouter = require('./routes/grams')
const welcomeRouter = require('./routes/welcomeRouter')

const app = express()

app.set('view engine', 'ejs') // sets the "view engine" configuration to use 'ejs'. IE Telling ExpressJS to use EJS as our views
app.set('views', 'views') // tell express our view files are in a directory called views

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

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
