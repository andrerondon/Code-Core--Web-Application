const express = require('express')
const { UsersController } = require('../controllers')
const router = express.Router()

router.get('/', UsersController.index)
router.get('/new', UsersController.new)
// router.get('/:id', UsersController.show)
// router.get('/:id/edit', UsersController.edit)
router.post('/', UsersController.create)
// router.delete('/:id', UsersController.destroy)
// router.patch('/:id', UsersController.update)

module.exports = router
