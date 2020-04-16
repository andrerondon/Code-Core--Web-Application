// Update with your config settings.

module.exports = {

  development: {
    client: 'pg', // the client here is the pg library we've npm installed
    connection: {
      database: 'quiz_bootcamp' // this is the name of the datbase our app will connect to. You need to create this database with the command `createdb <databse_name>` if you have not already
      // to check if a database exists we can psql into it with a command like so: `psql -d blog_on_express_10`
      // username: '', // if you use the command whoami this should be the username of your postgresql user
      // password: '' // password is something you set on our own. you can reset your password by logging into psql and typing the command `\password`
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
    // you can generate a new seed file with the command `knex seed:make <seed_name>`
  }

};
