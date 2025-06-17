const express = require('express')
const isAuth = require('../middlewares/isAuth')
const { createBooking, cancelBooking } = require('../controllers/bookingController')

const router = express.Router()

router.post('/create/:id',isAuth, createBooking)
router.delete('/cancel/:id',isAuth, cancelBooking)


module.exports = router