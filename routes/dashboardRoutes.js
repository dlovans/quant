const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController')

router.route('/')
    .get(dashboardController.dashboard)

module.exports = router