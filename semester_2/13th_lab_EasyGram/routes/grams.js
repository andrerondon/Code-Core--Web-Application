const express = require('express')
const knex = require('../db/client')

const router = express.Router()

router.get('/', (req, res) =>{
    knex.select('*').from('grams')
    .then (grams => {
        res.render('welcome.ejs',{ grams })
    })

})

module.exports = router