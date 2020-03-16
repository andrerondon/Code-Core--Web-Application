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
  }
}
