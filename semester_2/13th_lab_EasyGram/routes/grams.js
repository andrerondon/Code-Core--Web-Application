const express = require('express')
const knex = require('../db/client')

const router = express.Router()

// router.get('/', (req, res) =>{
//     knex.select('*').from('grams')
//     .then (grams => {
//         res.render('welcome.ejs',{ grams })
//     })

// })

router.get('/', (req, res) => {
    knex.select('*').from('grams')
      .then(grams => {
        res.render('welcome.ejs', { grams })
      })
      .catch(e => {
        res.render('welcome.ejs', { grams: [] })
      })
  })

router.get('/users/new', (req, res) =>{
    knex.select('*').from('grams')
    .then (grams => {
        res.render('users/newUser.ejs',{ grams })
    })

})

router.get('/grams', (req, res) =>{
    knex.select('*').from('grams')
    .then (grams => {
        res.render('Welcome Grans',{ grams })
    })

})


module.exports = router