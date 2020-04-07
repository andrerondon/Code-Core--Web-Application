const { User } = require('../models') // User is our Bookshelf Model
const Password = require('../helpers/Password')

module.exports = {
  index: (req, res) => {
    User.fetchAll()
      .then(users => {
        users = users.toJSON()
        console.log(users)
        res.render('users/index', { users })
      })
  },
  new: (req, res) => {
    res.render('users/new')
  },
  create: (req, res, next) => {
    const { firstName, lastName, email, password, passwordConfirmation } = req.body
    // we create a new instance of a User model
    new User({
      first_name: firstName,
      last_name: lastName,
      email,
      password: password,
      passwordConfirmation: passwordConfirmation
    }) // calling .save() will trigger the "saving" event.
    // all bookshelf methods will have documentation about which events it will trigger
    // https://bookshelfjs.org/api.html#Model-instance-save
    // at any point inside of the instance lifecycle there can be a error thrown either by a booskhelf method or our own code in any case we will need to .catch() the thrown error otherwise our application will crash
      .save()
      .then(user => {
        user = user.toJSON()
        req.session.sessionFlash.confirm = 'User Created!'
        res.redirect(`/users/${user.id}`)
      })
      .catch(err => { // err is something we have thrown from our model or something bookshelf has thrown
        console.log(err)
        // because of our custom sessionFlash middleware: we can set req.session.sessionFlash.errors to any err object we want and it will be available as a global variable on the next request
        req.session.sessionFlash = {}
        req.session.sessionFlash.errors = err
        res.redirect('users/new')
      })
  },
  show: (req, res) => {
    const { id } = req.params
    new User({ id }).fetch({ withRelated: 'events' })
      .then(user => {
        user = user.toJSON()
        console.log(user)
        res.render('users/show', { user })
      })
  },
  destroy: (req, res) => {
    const { id } = req.params
    new User({ id }).destroy()
      .then(() => {
        res.redirect('/users')
      })
  },
  edit: (req, res) => {
    const { id } = req.params
    new User({ id }).fetch()
      .then(user => {
        user = user.toJSON()
        res.render('users/edit', { user })
      })
  },
  update: (req, res) => {
    const { id } = req.params
    const { firstName, lastName, email, password } = req.body
    new User({ id }).save({ first_name: firstName, last_name: lastName, email, password_digest: password })
      .then(user => {
        res.redirect(`/users/${user.id}`)
      })
      .catch(err => {
        res.send(err)
      })
  }
}
