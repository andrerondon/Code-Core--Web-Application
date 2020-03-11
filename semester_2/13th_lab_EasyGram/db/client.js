const knex = require ('knex')
const kenexConfiguration = require ('../knexfile')


module.exports = knex (kenexConfiguration.development)