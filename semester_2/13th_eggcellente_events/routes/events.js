const express = require('express')
const { events } = require('../controllers')

const router = express.Router()

// events index page
router.get('/', events.index)

// events show page
// "/events/:id"
// "/events/2"
router.get('/:id', events.show)

// events create action
router.post('/', events.create)

// events new page
// refactor this router to use the controller
router.get('/new', events.new)

// events delete action
router.delete('/:id', events.delete)

module.exports = router
