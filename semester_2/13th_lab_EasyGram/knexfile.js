// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',        // pg is the lubrary to connect client and the server
    connection: {
      database: 'eggcellente_events_wadd_1',
      // username
      // password      just for linux.... mac genious doesn't need it
      
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },


};
