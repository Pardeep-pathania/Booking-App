const express = require('express')
const isAuth = require('../middlewares/isAuth')
const { createBooking } = require('../controllers/bookingController')

const router = express.Router()

router.post('/create',isAuth, createBooking)

module.exports = router