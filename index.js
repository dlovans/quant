const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

const generalRoutes = require('./routes/generalRoutes.js')
const signinRoutes = require('./routes/signinRoutes.js')
const signupRoutes = require('./routes/signupRoutes.js')
const dashboardRoutes = require('./routes/dashboardRoutes.js')

if (process.env.NODE_ENV === "development") {
    require('dotenv').config()
}

mongoose.connect(process.env.DB_URI || 'mongodb://127.0.0.1:27017/aquity');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


app.use('/', generalRoutes)
app.use('/signin', signinRoutes)
app.use('/signup', signupRoutes)
app.use('/dashboard', dashboardRoutes)



app.listen(3000, () => {
    console.log('PORT 3000')
})