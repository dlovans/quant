const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('public/landing')
})

router.get('/signin', (req, res) => {
    res.render('auth/signin')
})

router.get('/signup', (req, res) => {
    res.render('auth/signup')
})

router.get('/about', (req, res) => {
    res.render('public/about')
})

router.get('/blog', (req, res) => {
    res.render('public/blog')
})

module.exports = router