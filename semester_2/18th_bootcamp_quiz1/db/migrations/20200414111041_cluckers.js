
exports.up = function(knex) {
    return knex.schema.createTable('cluckers', t =>{
        t.increments('id')
        t.string('full_name')
        t.string('srcUrl')
        t.string('content')
        t.timestamps(true, true) // create created_at and updated_at columns which automatically default to current time

    })
  
};
// This down function is used to undo the up function
exports.down = function(knex) {
    return Knex.schema.dropTable('cluckers')
  
};
