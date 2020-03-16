const knex = require('../db/client')
const { event } = require('../models') // deconstructing event property from models object
// const models = require('../models') these two lines are replaced by the one above
// const event = models.event

module.exports = {
  index: (req, res) => {
    event.all() // ask the model for all of our vents
      .then(events => {
        res.render('events/index', { events }) // when we get all the events respond with a view
      })
  },
  show: (req, res) => {
    let { id } = req.params // req.params.id is the value coming from the URL
    id = parseInt(id)
    event.one(id)
      .then(events => { // knex always returns an array of records
        if (events.length > 0) {
          res.render('events/show', { event: events[0] })
        } else {
          res.send(`No event with id ${id}`)
        }
      })
  },
  create: (req, res) => {
    const { title, description } = req.body
    event.create({ title, description })
      .then(event => {
        res.send(event)
      })
  },
  new: (req, res) => {
    res.render('events/new')
  },
  delete: (req, res) => {
    const { id } = req.params // req.params.id is the value coming from the URL
    event.delete(id)
      .then(numberOfDeletedRecords => {
        // res.send(`${numberOfDeletedRecords}`)
        res.redirect('/events')
      })
      .catch(err => {
        console.log(err)
      })
  }
}
