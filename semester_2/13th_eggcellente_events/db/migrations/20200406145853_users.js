
exports.up = function(knex) {
    return knex.schema.alterTable('events', t => {
      t.bigInteger('user_id').references('users.id') // user_id column is a foreign key on users.id
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('events', t => {
      t.dropColumn('user_id')
    })
  };
  