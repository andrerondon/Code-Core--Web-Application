const bookshelf = require('../db/orm')
const Password = require('../helpers/Password')

// User is like a constructor function used to create instances of a user
// A instance of a User represents a record in the "Users" table.
// Creating an instance only creates a object in memory. It does not do anything to
// the database unless it is told to do so via Bookshelf methods 
const User = bookshelf.model('User', {
  // this object represents a instance of a User
  // any methods you provide to this object are "instance" methods

  tableName: 'users',
  // initalize is a method that gets invoked everytime a instance of this model is created
  initialize () {
    // this.on() is a function used to register event listeners.
    // Events occur at different lifecycles of a instance
    // Documentation for all bookshelf events https://bookshelfjs.org/api.html#Model-subsection-events
    // when the "saving" event gets triggered this callback will be invoked
    this.on('saving', (model, attrs, options) => {
      // attrs represents the instance's attributes
      console.log('saving event triggered')
      console.dir({
        model,
        attrs,
        options
      })
      this.validate() // a custom instance method used to validate attributes of our model

      // makes email lowercase
      attrs.email = attrs.email.toLowerCase()
      // asynchronous function to hash passwords. If you are doing anything asynchronous inside of a event handler you must return a promise
      return Password.create(attrs.password)
        .then(hash => {
          // when we finish hashing the password
          attrs.password_digest = hash // we add the hash to the password_digest column
          delete attrs.password // then we remove the password and passwordConfirmation attributes from the instance attributes
          delete attrs.passwordConfirmation
        })
      // when this returns it can move on to the next stage which is actually saving a instance into the database
    })

    this.on('saved', (user) => {
      console.log(`saved ${user} into the database`)
    })
  },
  validate () {
    const errors = []
    if (!this.attributes.first_name) {
      errors.push(new Error('Must provide first name'))
    }
    if (!this.attributes.last_name) {
      errors.push(new Error('Must provide last name'))
    }
    if (this.attributes.first_name.length < 5) {
      errors.push(new Error('First Name must be greater than 5 characers'))
    }
    if (this.attributes.password !== this.attributes.passwordConfirmation) {
      errors.push(new Error('Passwords do not match'))
    }
    if (errors.length) {
      throw errors
    }
    return this
  }
})

// knexJS -> makes SQL queries
// BookshelfJS -> is our ORM -> create objects that represent table rows

// Create an instance of a User
// const john_snow = new User({ first_name: 'JohnS', last_name: 'snow', email: 'john@snow.ca', password: '123456', passwordConfirmation: '123456' })
//   .save() // calling .save() will actually add this object to the Users table

// console.log(john_snow)
module.exports = User
