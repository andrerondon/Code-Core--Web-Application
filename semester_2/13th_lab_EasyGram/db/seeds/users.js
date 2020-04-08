const faker = require('faker')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(new Array(50).fill().map(() => {
        return {
          srcUrl: `${faker.image.avatar()}`,
          description: `${faker.lorem.sentence()}`
        }
      }))
    })
}
