const express = require('express')
const knex = require('../db/client')

const router = express.Router()

router.get('/', (req, res) => {
  knex.select('*').from('grams')
    .then(grams => {
      res.render('grams/index', { grams })
    })
    .catch(e => {
      res.render('grams/index', { grams: [] })
    })
})

router.post('/', (req, res) => {
  const {
    srcUrl,
    description,
    price
  } = req.body
  if (!srcUrl) { // if there is no srcUrl
    res.render('grams/new', { errors: ['Missing Image Url'] })
  }
  knex.insert({
    srcUrl,
    description,
    price
  }).into('grams').returning('*')
  .then(()=>{
    res.send('thankuuu')
  })
    // .then(newGram => {
    //   res.send(newGram)
    // })
})

router.get('/new', (req, res) => {
  res.render('grams/new')
})

module.exports = router