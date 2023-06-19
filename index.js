const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const mongoose = require('mongoose')

if (process.env.NODE_ENV === "development") {
    require('dotenv').config()
}

mongoose.connect(process.env.DB_URI || 'mongodb://127.0.0.1:27017/aquity');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('landing')
})

app.get('/signin', (req, res) => {
    res.render('signin')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})


app.listen(3000, () => {
    console.log('PORT 3000')
})