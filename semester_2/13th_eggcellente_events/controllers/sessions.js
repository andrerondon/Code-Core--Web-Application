const { User } = require('../models')

module.exports = {
  new: (req, res) => {
    console.log('--------------')
    console.log(req.session)
    console.log('--------------')
    res.render('sessions/new')
    res.render('sessions/new')
  },
  create: (req, res) => {
    const { email, password } = req.body
    new User({ email }).fetch()
      .then(user => {
        user = user.toJSON()
        if (user.password_digest === password) {
          console.log('session set')
          req.session.id = user.id
        }
        res.redirect('/')
      })
  }
}
