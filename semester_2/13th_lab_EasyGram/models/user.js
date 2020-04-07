const bookshelf = require('../db/orm')
const Password = require('../helpers/Password')

const User = bookshelf.model('User', {


  tableName: 'users',
  
  initialize () {
    
    this.on('saving', (model, attrs, options) => {
  
      console.log('saving event triggered')
      console.dir({
        model,
        attrs,
        options
      })
      this.validate() 
      attrs.email = attrs.email.toLowerCase()
      
      return Password.create(attrs.password)
        .then(hash => {
          attrs.password_digest = hash
          delete attrs.password
          delete attrs.passwordConfirmation
        })
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

module.exports = User
