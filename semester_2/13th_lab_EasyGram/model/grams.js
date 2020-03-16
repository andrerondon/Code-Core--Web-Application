const knex = require('../db/client')

module.exports = {
  all: () => {
    return knex.select('*').from('grams')
      .then( grams => {
        return grams
      })
  }
}
