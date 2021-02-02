const express = require('express')
const router = express.Router()
const controller = require('../controllers/payment.controllers');

router.post('/charge', controller.charge)

module.exports = router;