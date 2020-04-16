const express = require('express')
const knex = require('../db/client')


const router = express.Router()

router.get("/new", (req, res) => {
    if(req.cookies.username){
    res.render('events/newevent');
    }else {
    res.redirect("/sign_in")  
    }
});

router.post('/', (req, res) => {
    const full_name = req.cookies.username
    const { srcUrl, content } = req.body
    // the callback function in .then() has arguments depending on the promise being returned
    knex.insert({ 
        full_name, 
        srcUrl,
        content 
    }).into('cluckers').returning('*') // knex.insert().into() returns a promise. If we want to do anything after the async action has completed
    //   .then((args) => {
    //     res.send(args)
    //   })
      .then(() => {
            res.redirect("/users");
       })    
      .catch(err => {
        res.send(err)
      })
  })
  router.get('/', (req, res) =>{
    knex('cluckers')
    .orderBy('created_at', 'desc')
    .then((arg) => {
        console.log(arg);
        res.render('events/posted', {arg})
        // res.send(arg)
    })
  })

module.exports = router
