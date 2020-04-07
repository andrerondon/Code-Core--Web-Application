const bookshelf = require('../db/orm')
const Password = require('../helpers/Password')
const Checkit = require('checkit')

const rules = {
  first_name: 'required',
  last_name: 'required',
  email: ['required', 'email'],
  password: ['required', 'minLength:4'],
  passwordConfirmation:
  [
    { rule: 'required', message: 'bananas' }, // is another way to define validations. We can also overwrite default error messages this way
    {
      rule: function (val, params, context) { // we can create custom validation by providing a function
      // val is the current property value
      // this.target is the instance of the model
        if (val !== this.target.password) {
          throw new Error('passwords do not match')
        }
      },
      message: 'Passwords do not match'
    }
  ]
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
        model, // model represents the bookshelf model. In this case it will be the User model
        attrs, // all the properties of the instance of the model
        options // options object that contains utility you can use. For example, knex client is here
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

  // sets up a one to many relationship with events
  // doing this will allow bookshelf to generate all the join queries on events for us
  // new User({id: 5}).fetch().events

  // the events table should have a column user_id which references a user.id
  events () {
    // this will tell the User model that it is related to the Event model. And allows us to query for all the related events
    return this.hasMany('Event')
  },

  validateSave (model, attrs, options) {
    console.log('logging model, attrs, options')
    console.dir({ model, attrs, options })
    // new Checkit(rules) initializes rules for the model
    // .run(object) is a Checkit function that accepts a object to be run against the rules
    return new Checkit(rules).run(this.attributes) // checks if this.attributes passes the rules
  }
})

module.exports = User
