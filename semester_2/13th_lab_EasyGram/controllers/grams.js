const { gram } = require('../models')

module.exports = {
  index: (req, res) => {
    gram.all()
      .then(grams => {
        res.render('grams/index', { grams })
      })
      .catch(e => {
        res.render('grams/index', { grams: [] })
      })
  },
  create: (req, res) => {
    const {
      srcUrl,
      description,
      price
    } = req.body
    if (!srcUrl) { // if there is no srcUrl
      res.render('grams/new', { errors: ['Missing Image Url'] })
    }
    gram.create({ srcUrl, description, price })
      .then( newGram => {
        res.send(newGram)
      })
  },
  new: (req, res) => {
    res.render('grams/new')
  }
}
