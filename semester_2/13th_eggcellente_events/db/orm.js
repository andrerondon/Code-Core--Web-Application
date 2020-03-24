// initialize instance of bookshelf ORM https://github.com/bookshelf/bookshelf
// https://bookshelfjs.org/#installation
const bookshelf = require('bookshelf')
const knex = require('./client')

module.exports = bookshelf(knex)
