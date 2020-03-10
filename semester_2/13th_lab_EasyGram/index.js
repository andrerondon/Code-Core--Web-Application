const express = require('express')
const logger = require ('morgan')

const app = express();

app.set ('view engine', 'ejs')
app.set ('views', 'views')

app.use(logger('dev'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    console.log(req.query);
    res.render('welcome.ejs') 
  })

app.get('/users/new', (req, res) => {
    console.log(req.query);
    res.render('newUser.ejs') 
  })

app.post('/users/new', (req, res) => {
    console.log(req.body)
    res.send(`thank you ${req.body.First_name} ${req.body.Last_name}`)
  })

  

const PORT = 4200
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
  console.log(`Server Listening on ${DOMAIN}:${PORT}`)
})

