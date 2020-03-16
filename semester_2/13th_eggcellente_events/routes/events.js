const express = require('express')
const { events } = require('../controllers')

const router = express.Router()

router.get('/', events.index)

// "/events/:id"
// "/events/2"
router.get('/:id', events.show)

router.post('/', events.create)

// refactor this router to use the controller
router.get('/new', events.new)

module.exports = router
