const express = require('express') // this loads the express library into this file
const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser') // old middleware should use express.urlencoded
const methodOverride = require('method-override')

// importing all my sub routers
const sessionsRouter = require('./routes/sessions')
const usersRouter = require('./routes/users')

const app = express()

// setup Express config
app.set('view engine', 'ejs') // tell express whenever we render a view it should be using EJS as the engine to create the view. **Make sure you've installed ejs with `npm install ejs`
app.set('views', 'templates') // tell express our view templates sit in a directory called "templates". By default express will think the views are inside a directory called "views" (this is convention too)

// Middleware 
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride((req, res) => {
  if (req.body && req.body._method) {
    return req.body._method
  }
}))

app.use(cookieParser()) // cookie parser is a middleware to format the cookies coming into your server in a nice javascript object. it will add it to req.cookies

app.use('/', sessionsRouter) // mounts the sessionRouter
app.use('/users', usersRouter) // mount the usersRouter
// app.use('/blogposts' blogpostsRouter)

// GET "/"
app.get('/', (req, res) => {
  console.log(req.cookies) // thanks to the cookieParser middleware req.cookies will contain key values of all the information saved onto the cookie
  // req is a object that represents the current HTTP Request being made to your app
  // res is a object with properties and methods used to create a response to a request

  // res.render() is used to render a template. It accepts two arguments
  // 1) is the path of the view (ejs file) from the "views" directory
  res.render('welcome')
})

// we can create a route here to login a user but to organize our code better lets move all the routes related to login into a file `/routes/sessions.js`
// app.get('/login', (req, res) => {
//   res.send('some sort of form')
// })

const DOMAIN = 'localhost' // loopaddress. All requests made here will go out and back into your computer
const PORT = 3000 // most ports between 1-*65000 will work

app.listen(PORT, DOMAIN, () => {
  // when the app starts listening this callback gets invoked
  console.log(`Server is listening on ${DOMAIN}:${PORT}`)
})
