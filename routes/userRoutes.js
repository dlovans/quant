const express = require('express')
const router = express.Router()

router.get('/signin', (req, res) => {
    res.render('auth/signin')
})

router.get('/signup', (req, res) => {
    res.render('auth/signup')
})

module.exports = router