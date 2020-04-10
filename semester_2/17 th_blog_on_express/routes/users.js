const express = require('express')
const db = require('../db/client')

const router = express.Router()

// When a user vists GET "/users/new"
router.get('/new', (req, res) => {
  res.render('users/new')
})

// When a user submits the form on GET "/users/new"
router.post('/', (req, res) => {
  const { fullName, email } = req.body
  // db.insert().into() returns a promise. If we want to do anything after the async action has completed
  // we want to add a .then call to the promise.
  // .then() accepts a callback function that gets invoked when the async action complets.
  // the callback function in .then() has arguments depending on the promise being returned
  db.insert({ full_name: fullName, email: email }).into('users').returning('*')
    .then((args) => {
      res.send(args)
    })
    .catch(err => {
      res.send(err)
    })
  // knex query to create a user
})

// Show page for 1 individual user
router.get('/:id', (req, res, next) => {
  // we can access the dynamic id with req.params.id
  // params are parameters saved into a url. If someone goes to the path GET "/users/476eh93" the id in this case is "476eh93"
  const { id } = req.params
  db.select('*').from('users').where({ id })
    .then(users => {
      // these knex queries will always return an array of records. Even if only one or no records gets returned It's always an array
      const user = users[0]
      res.render('users/show', { user })
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router
