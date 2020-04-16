const express = require('express') // this loads the express library into this file
const methodOverride = require('method-override') // method override will look for a input on every POST request called _method. If this input is available it will replace the current HTTP Verb with the value of that input
const cookieParser = require('cookie-parser') // body parser will parse form inputs from a POST request and turn it into a really nice object attatched to req.body
const indexRouter = require ('./routes/index')
const usersRouter = require ('./routes/users')


const app = express()

/////////// middlewares ///////////////////
app.set('view engine', 'ejs') // tell express whenever we render a view it should be using EJS as the engine to create the view.
app.set('views', 'views') // tell express our view templates sit in a directory called "templates". By default express will think the views are inside a directory called "views" (this is convention too)
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))  // to see images

app.use(cookieParser())
app.use((req, res, next) => {
  const full_name = req.cookies.username
  res.locals.loggedInUser = full_name;
  // console.log(" hereeee");
  // console.log(full_name);
  // console.log(res.locals.loggedInUser);
  next()  // global acess in the app     to acess req.coockie.full_name
})


app.use(methodOverride((req, res) => {
  if (req.body && req.body._method) {
    const method = req.body._method
    return method
  }
}))


////////////  ROUTES  ////////////

app.use('/', indexRouter) // redirecting to routes'index'
app.get('/', (req, res) => {
  res.render('welcome')
})
app.use('/users', usersRouter) // redirecting to routes'users'






const DOMAIN = 'localhost' 
const PORT = 4000 

app.listen(PORT, DOMAIN, () => {
  // when the app starts listening this callback gets invoked
  console.log(`Server is listening on ${DOMAIN}:${PORT}`)
})
