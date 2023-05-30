const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const mongoose = require('mongoose')
const { timeStamp } = require('console')

if (process.env.NODE_ENV === "development") {
    require(dotenv).config()
}

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('landing')
})


app.listen(3000, () => {
    console.log('PORT 3000')
})