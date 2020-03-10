const express = require('express')
const knex = require('../db/client')
const router = express.Router()

router.get('/', (req, res) => {
  knex.select('*').from('events')
    .then(events => {
      res.render('events/index', {events})
    })
})

module.exports = router