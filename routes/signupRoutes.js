const express = require('express')
const router = express.Router()


const signupController = require('../controllers/signupController')

router.route('/')
    .get(signupController.renderSignup)
    .post(signupController.signupUser)

module.exports = router