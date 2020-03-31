const express = require('express')
const { UsersGramsController } = require('../controllers')

const router = express.Router()

router.get('/', UsersGramsController.index)
router.get('/new', UsersGramsController.new)
router.post('/new', UsersGramsController.create)
module.exports = router

