const bookshelf = require('../db/orm')


const gram = bookshelf.model('gram', {
  tableName: 'grams'
})

module.exports = gram