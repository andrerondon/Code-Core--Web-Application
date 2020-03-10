const faker = require('faker') // why is this faker?
// why this seed file?

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      // return knex('events').insert([
      //   {title: 'john snow', description: 'old fighter'}
      // ]);
      return knex('events').insert(new Array(50).fill().map(() => {
        return {
          title: `${faker.hacker.ingverb()} ${faker.hacker.adjective()} ${faker.hacker.noun()}`,
          description: `${faker.hacker.phrase()}`
        }
      }))
    });
};