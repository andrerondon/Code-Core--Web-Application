const bcrypt = require('bcrypt') // bcrypt is a library used to turn strings into a unreadable random format
const SALT_ROUNDS = 10 // 10 salt rounds is recommended by bcrypt
// if you wanted a more secure password you can increase the salt rounds BUT this increases the time it takes
// to hash a value exponentially
// salt is just a small string used to help in the hashing algorithm.
// it also makes sure no two raw passwords end up being the same hash

// salt is a random string used as a seed to help hash a value
// salt could be = "$ab8248Deif"
module.exports = class Password {
  static create (password) {
    // bcyrpt.hash has a function to hash passwords
    // bcrypt.hash accepts two arguments
    // 1) the plain text password
    // 2) the number of salt rounds. bcrypt automatically generates salt for us
    // bcrypt.hash is asynchronous because hashing takes a long time and is cpu intensive
    return bcrypt.hash(password, SALT_ROUNDS)
      .then(hash => {
        return hash
      })
  }

  static compare (password, hash) {
    return new Promise((resolve, reject) => {
      // bcrypt.compare is used to compare a plain text password with the stored passowrd in the database
      // it accepts 3 arguments:
      // 1) plain text password
      // 2) the hash created by the bcrypt.hash function. This is usually stored in your database
      // 3) a callback with true or false
      bcrypt.compare(password, hash, (err, same) => {
        // bcrypt will hash the plain text password using the password stored in the database.
        // if the hashed version of the password is the same as the stored hash it will return true
        if (err) {
          reject(err)
        }
        resolve(same)
      })
    })
  }
}

// How to use this module:
// Password.create('supersecret')

// Password.create(args)
// const pass = new Password()
// pass.create() // this throws an error. create does not exist
