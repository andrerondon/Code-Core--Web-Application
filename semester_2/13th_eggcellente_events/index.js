const express = require('express')

const app = express();

// Routes

// GET "/"
app.get('/', (req, res) => {
  res.send("<h1>Hello World</h1>")
})

// When somebody goes to "GET localhost:3000/survey"
app.get('/survey', (req, res) => {
  res.send("<h1>Survey</h1>")
})

const PORT = 3000
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
  console.log(`Server Listening on ${DOMAIN}:${PORT}`)
})