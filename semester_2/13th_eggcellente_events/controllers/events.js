const { Event } = require('../models') // deconstructing event property from models object
// const models = require('../models') these two lines are replaced by the one above
// const event = models.event

module.exports = {
  index: (req, res) => {
    Event.fetchAll()
      .then(events => {
        // Bookshelf ORM returns a Bookshelf Model instance that has a bunch of extra methods.
        // we have to call events.toJSON() to grab the records from the Bookshelf Model Instance
        events = events.toJSON()
        res.render('events/index', { events }) // when we get all the events respond with a view
      })
      .catch(err => {
        console.log(err)
      })
  },
  show: (req, res) => {
    let { id } = req.params // req.params.id is the value coming from the URL
    id = parseInt(id)
    // because event belongsTo('User') we can add a withRelated option to fetch to grab the user it belongs to
    new Event({ id }).fetch({ withRelated: 'owner' }) // https://bookshelfjs.org/api.html#Model-instance-fetch
      .then(event => { // knex always returns an array of records
        event = event.toJSON()
        console.log(event)
        res.render('events/show', { event })
      })
      .catch(err => { // will throw this https://bookshelfjs.org/api.html#Model-static-NotFoundError error if we don't recieve a event back from fetch()
        console.log(err)
      })
  },
  create: (req, res) => {
    const user = res.locals.user // grab the user from session so we can use it for user_id column
    const { title, description } = req.body
    const newEvent = Event.forge({ title, description, user_id: user.id }) // event.forge creates a new in memory instance of Event
    newEvent.save() // calling .save() will add the instance to the database
      .then(event => {
        res.redirect(`/events/${event.id}`)
      })
  },
  new: (req, res) => {
    res.render('events/new')
  },
  delete: (req, res, next) => {
    const { user } = res.locals
    const { id } = req.params // req.params.id is the value coming from the URL
    let event
    new Event({ id }).fetch() // delete the event record with id
      .then(result => {
        event = result
        if (event.attributes.user_id === user.id) {
          return event.destroy()
        } else {
          req.session.sessionFlash.error = 'You are not allowed to do this action'
          res.redirect(`/events/${event.id}`)
        }
      })
      .then(hasDeleted => {
        res.redirect('/events')
      })
      .catch(err => { // throws https://bookshelfjs.org/api.html#Model-static-NoRowsDeletedError error if no records are deleted
        console.log(err)
        next(err)
      })
  },
  edit: (req, res) => {
    const user = res.locals.user
    const { id } = req.params
    new Event({ id }).fetch()
      .then(event => {
        if (event.attributes.user_id === user.id) {
          event = event.toJSON()
          res.render('events/edit', { event }) // send them a ejs file
        } else {
          req.session.sessionFlash.error = 'You dont own this event you can not go to the edit page'
          res.redirect(`/events/${id}`) // redirect to GET localhost:3000/events/50
        }
      })
  },
  update: (req, res, next) => {
    const user = res.locals.user // grab the user from the session
    const { id } = req.params // grabs the event id from the url params
    const { title, description } = req.body // grabs the new title and description from the form
    let event
    new Event({ id }).fetch() // fetch the event from the database using the event.id
      .then(result => {
        event = result
        if (event.attributes.user_id === user.id) { // check if the event.user_id is equal to the user.id from session
          // if the current user is the owner of the event then we can call event.save()
          return event.save({ title, description }) // returns a promise
        } else {
          // if the current user is NOT the owner of the event.
          // DO NOT save redirect them to the event show page
          req.session.sessionFlash.error = 'You are not allowed to do this action' // display an error message
          res.redirect(`/events/${event.id}`)
        }
      })
      .then(event => { // after saving event redirect to the event show page
        event = event.toJSON()
        res.redirect(`/events/${event.id}`)
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }
}
