const express = require('express')
const { event } = require('../controllers')

const router = express.Router()

router.get('/', event.index)

router.post('/', event.create)

// refactor this router to use the controller
router.get('/new', event.new)

module.exports = router
