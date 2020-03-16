const express = require('express')
const knex = require('../db/client')
const { grams } = require('../controllers')

const router = express.Router()

// MVC archeticture style
// 1: (M)odel  -> data... making queries to our database
// 2: (V)iew -> HTML/CSS
// 3: (C)ontroller -> Responding to requests
router.get('/', grams.index)

router.post('/', grams.create)

router.get('/new', grams.new)

module.exports = router
