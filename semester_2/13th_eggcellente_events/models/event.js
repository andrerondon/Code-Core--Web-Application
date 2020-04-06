const bookshelf = require('../db/orm')

const Event = bookshelf.model('Event', {
  tableName: 'events',
  // just adds helpful join methods to our bookshelf queries
  owner () {
    return this.belongsTo('User')
  }
})

module.exports = Event
