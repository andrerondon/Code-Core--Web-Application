// const knex = require('../db/client')


// module.exports = {
//   all: () => {
//     return knex.select('*').from('cluckers')
//       .then( cluckers => {
//         return cluckers
//       })
//   },
//   create: ({ full_name, srcUrl, content,}) => {
//     return knex.insert({
//      full_name,
//       srcUrl,
//       content,
//     }).into('cluckers').returning('*')
//     .then(newcluckers => {
//       return newcluckers
//     })
//   },
//   one: (id) => {
//     return knex.select().from('cluckers').where({ id: id })
//   },
//   delete: (id) => {
//     return knex.delete().from('cluckers').where({ id: id })
//   }
// }


