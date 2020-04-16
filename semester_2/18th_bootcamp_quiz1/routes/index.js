const express = require('express')



const router = express.Router()

router.get('/sign_in', (req, res) => {
    res.render('users/sign')
    // res.send('Your are login page')
})
router.post('/sign_in', (req, res) =>{
    const oneDay = 1000 * 60 * 60 * 24
    const params = req.body   // geting from url 
    res.cookie('username', params.full_name, {maxAge: oneDay})     // sending username as a cookie
    res.redirect('/users/new')
})

router.post("/log_out", (req, res) => {
    res.clearCookie('username'); // res.clearCookie will tell the browser to remove a cookie from it's store
    res.redirect("/sign_in");
});

module.exports = router