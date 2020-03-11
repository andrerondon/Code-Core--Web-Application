const express = require('express')
const knex = require('../db/client')

const router = express.Router()

router.get('/', (req, res) =>{
    knex.select('*').from('grams')
    .then (grams => {
        res.render('welcome.ejs',{ grams })
    })

})

router.post('/', (req, res) => {
  const { srcUrl, description } = req.body
  knex.insert({ srcUrl, description }).into('grams')
    .then(() => {
      res.redirect('/grams')
    })
    .catch(() => {
      res.render('users/NewEasyGrams')
    })
})

router.get('/', (req, res) =>{
    knex.select('*').from('grams')
    .then (grams => {
        res.render('users/newProfile.ejs',{ grams })
    })

})

// router.get('/grams', (req, res) =>{
//     knex.select('*').from('grams')
//     .then (grams => {
//         res.render('Welcome Grans',{ grams })
//     })

// })
router.get('/grams', (req, res) => {
    res.render('users/NewEasyGrams.ejs')
  })

module.exports = router