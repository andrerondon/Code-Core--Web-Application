
exports.up = function(knex) {
    return knex.schema.alterTable('grams', t => {
      t.float('price')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('grams', t => {
      t.dropColumn('price')
    })
  };
  