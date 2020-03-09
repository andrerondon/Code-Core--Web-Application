const express = require('express')

const app = express();

// Routes

// GET "/"
app.get('/', (req, res) => {
  res.send("Hello World")
})

const PORT = 3000
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
  console.log(`Server Listening on ${DOMAIN}:${PORT}`)
})