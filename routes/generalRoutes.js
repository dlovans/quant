const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('general/landing')
})

router.get('/about', (req, res) => {
    res.render('general/about')
})

router.get('/blog', (req, res) => {
    res.render('general/blog')
})

module.exports = router