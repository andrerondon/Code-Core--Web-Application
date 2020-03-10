// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'easygram'
      // username,
      // password
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

}
