const express = require('express')
const logger = require('morgan')

const app = express();

app.set('view engine', 'ejs') // sets the "view engine" configuration to use 'ejs'. IE Telling ExpressJS to use EJS as our views
app.set('views', 'views') // tell express our view files are in a directory called views

// Middleware
// Middleware are functions that sit inside of a request/reponse cycle that are used to change the request response objects or execute code between the request and response

// Morgan Middleware - used for logging requests
// the location of where you invoke/mount the middleware matters. If you need certain middleware to run before something then make sure it is invoked before
app.use(logger('dev'))


// Routes
// GET "/"
app.get('/', (req, res) => {
  // res.send("<h1>Hello World</h1>")
  res.render('hello_world.ejs')
})

// When somebody goes to "GET localhost:3000/survey"
app.get('/survey', (req, res) => {
    res.render('survey.ejs')
})

app.get('/memes', (req, res) => {
    res.render('memes.ejs', {
      title: "Welcome to the meme page",
      memes: [
        "https://www.probytes.net/wp-content/uploads/2018/01/2.jpg",
        "https://www.probytes.net/wp-content/uploads/2018/01/20.png",
        "https://www.probytes.net/wp-content/uploads/2018/01/r_389776_tqMPa-1.jpg",
      ]
    })
  })

const PORT = 3000
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
  console.log(`Server Listening on ${DOMAIN}:${PORT}`)
})