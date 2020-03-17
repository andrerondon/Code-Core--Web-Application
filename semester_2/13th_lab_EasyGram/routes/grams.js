const express = require('express')
// const knex = require('../db/client')
const { grams } = require('../controllers')

const router = express.Router()

// MVC archeticture style
// 1: (M)odel  -> data... making queries to our database
// 2: (V)iew -> HTML/CSS
// 3: (C)ontroller -> Responding to requests
router.get('/', grams.index)

router.post('/', grams.create)

router.get('/new', grams.new)

// [Lab 1] Gram Show page
// Create a Show Page for Gram when user goes to "/grams/:id"

// - It should display the image, description and price of the gram
router.get('/:id', grams.show)

// [Lab 2] Gram Delete Action
// Add a button the gram show page that will delete the Gram

router.delete('/:id', grams.delete)

module.exports = router
