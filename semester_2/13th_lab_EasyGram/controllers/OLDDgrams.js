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
  },
  show: (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    gram.one(id)
      .then(grams => {
        if (grams.length > 0) {
          res.render('grams/show', { gram: grams[0] })
        } else {
          res.send(`No gram with ID:${id}`)
        }
      })
  },
  delete: (req, res) => {
    let { id } = req.params
    gram.delete(id)
      .then(() => {
        res.redirect('/grams')
      })
      .catch(e => {
        console.log(e)
      })
  }

}
