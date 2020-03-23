const express = require('express')
const { events } = require('../controllers')

const router = express.Router()

// events index page
router.get('/', events.index)

// events new page
// refactor this router to use the controller
//  GET "/events/new"
router.get('/new', events.new)

// events show page
// "/events/:id"
// "/events/2"
router.get('/:id', events.show)

// events edit page
// GET "/events/:id/edit"
router.get('/:id/edit', events.edit)

// events patch action
// PATCH "/events/:id"
router.patch('/:id', events.update)

// events create action
router.post('/', events.create)

// events delete action
router.delete('/:id', events.delete)
module.exports = router
