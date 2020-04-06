const bookshelf = require('../db/orm')
const Password = require('../helpers/Password')
const Checkit = require('checkit')

const rules = {
  first_name: 'required',
  last_name: 'required',
  password: ['required', 'minLength:4']
}

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
    this.on('saving', this.validateSave)
    this.on('saving', (model, attrs, options) => {
      // attrs represents the instance's attributes
      console.log('saving event triggered')
      console.dir({
        model,
        attrs,
        options
      })

      // makes email lowercase
      attrs.email = attrs.email.toLowerCase()
      // asynchronous function to hash passwords. If you are doing anything asynchronous inside of a event handler you must return a promise
      return Password.create(attrs.password)
        .then(hash => {
          attrs.password_digest = hash
          delete attrs.password
          delete attrs.passwordConfirmation
        })
    })
  },
  validateSave () {
    // new Checkit(rules) initializes rules for the model
    // .run(object) is a Checkit function that accepts a object to be run against the rules
    return new Checkit(rules).run(this.attributes) // checks if this.attributes passes the rules
  }
})

module.exports = User
