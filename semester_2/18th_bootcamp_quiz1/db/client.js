const knex = require('knex')
const knexConfigs = require('../knexfile')

// invoking knex() with a knexConfiguration will give us a database client that can be used to make requests to our database

const client = knex(knexConfigs.development)

module.exports = client
