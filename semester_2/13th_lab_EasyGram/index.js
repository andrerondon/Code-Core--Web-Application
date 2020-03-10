const express = require('express')
const logger = require('morgan')
// const knex = require('./db/client')
const eventsRouter = require('./routes/events')

const app = express()

app.set('view engine', 'ejs') // sets the "view engine" configuration to use 'ejs'. IE Telling ExpressJS to use EJS as our views
app.set('views', 'views') // tell express our view files are in a directory called views

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

////////Routers/////////////

app.use('/events', eventsRouter)

app.get('/', (req, res) => {
  console.log(req.query)
  res.render('welcome.ejs')
})

app.get('/users/new', (req, res) => {
  console.log(req.query)
  res.render('newUser.ejs')
})

app.post('/users/new', (req, res) => {
  console.log(req.body)
  res.send(`thank you ${req.body.First_name} ${req.body.Last_name}`)
})

// Events Index Page
// app.get('/events', (req, res) => {
//   knex.select('*').from('events')
//     .then(events => {
//       res.render('events/index', {events})
//     })
// })

const PORT = 4200
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
  console.log(`Server Listening on ${DOMAIN}:${PORT}`)
})
