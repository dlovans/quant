const express = require('express')
const router = express.Router()

const signinController = require('../controllers/signinController')


// Routes for signin
router.route('/')
    .get(signinController.renderSignin)
    .post(signinController.signIn)
module.exports = router