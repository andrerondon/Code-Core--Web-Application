
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, full_name: 'Jon Snow', email: 'one@one.com'},
        {id: 2, full_name: 'Little Fingers', email: 'two@two.com'},
        {id: 3, full_name: 'Red Weding', email: 'three@three.com'}
      ]);
    });
};

// seed file is used to populate our database with "production like" data. 
// to run the seed file use the command `knex seed:run`
