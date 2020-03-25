const { User } = require('../models')

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
  create: (req, res) => {
    const { firstName, lastName, email, password } = req.body
    new User({ first_name: firstName, last_name: lastName, email, password_digest: password }).save()
      .then(user => {
        res.send(user)
      })
  }
}
