const UsersGramsController  = require('express')

module.exports = {

    index: (req, res) => {
        gram.fetchAll()
            .then(grams =>{
                grams = grams.toJSON()
                res.render('grams/index', { grams })
            })
            
            .catch(e => {
            res.render('grams/index', { grams: [] })
            })
    },

    create: (req, res) => {
        const 
        { firstname,
        lastname,
        email,
        password,
        passwordConfirmation
        } = req.body
        if (password === passwordConfirmation) {
        res.send(`
        Thanks for signing up ${firstname} ${lastname}! We'll make sure we keep your password: ${password} and email: ${email} safe!
        `)
        } else {
        // res.render('users/andreProfile.ejs')
        res.render('grams/new')
        }  
    },

    new: (req, res) => {
        // res.render('grams/new')
        res.render('users/andreProfile.ejs')
    },



}
