const express = require('express')
const knex = require('../db/client')
const { grams } = require('../controllers')

const router = express.Router()

// MVC archeticture style
// 1: (M)odel  -> data... making queries to our database
// 2: (V)iew -> HTML/CSS
// 3: (C)ontroller -> Responding to requests
router.get('/', grams.index)

router.post('/', (req, res) => {
  const {
    srcUrl,
    description
  } = req.body
  if (!srcUrl) { // if there is no srcUrl
    res.render('grams/new', { errors: ['Missing Image Url'] })
  }
  knex.insert({
    srcUrl,
    description
  }).into('grams').returning('*')
    .then(newGram => {
      res.send(newGram)
    })
})

router.get('/new', (req, res) => {
  res.render('grams/new')
})

module.exports = router
