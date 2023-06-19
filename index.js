const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const mongoose = require('mongoose')

const publicRoutes = require('./routes/publicRoutes.js')
const userRoutes = require('./routes/userRoutes.js')

if (process.env.NODE_ENV === "development") {
    require('dotenv').config()
}

mongoose.connect(process.env.DB_URI || 'mongodb://127.0.0.1:27017/aquity');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


app.use('/', publicRoutes)
app.use('/', userRoutes)



app.listen(3000, () => {
    console.log('PORT 3000')
})