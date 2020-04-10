// migration files are used to create the structure of your database
// You can keep track of the history of your database through these migration files
// If you're on production a migration file should only be run once and they should always be run in order
// Super important: if you're in production you can not edit migration files. If you need to make a change to your database you must do it through a new migration

// This up function is used to apply changes to the database
exports.up = function(knex) {
    // reference this https://knexjs.org/#Schema docs to create migration SQL with KnexJS
    // createTable() is a function used to create a table. It accepts 2 arguments
    // 1) the name of the table. this should be lower case, snake_cased, and plural
    // 2) callback function with a t (table) argument.
    return knex.schema.createTable('users', t => {
      // t represents the table. it has methods used to create columns and other table related stuff.
      // increments() is a method used to create a column with type number that automatically increments on every new record
      t.increments('id')
      // create a string column called full_name
      t.string('full_name')
      t.string('email')
      // create created_at and updated_at columns which automatically default to current time
      t.timestamps(true, true)
    })
    
  };
  
  // This down function is used to undo the up function
  exports.down = function(knex) {
    return knex.schema.dropTable('users')
  };
  
  // we can run these migrations with the command `knex migrate:latest`