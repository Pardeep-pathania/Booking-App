const express = require('express');
const isAuth = require('../middlewares/isAuth.js');
const { getCurrentUser } = require('../controllers/userController.js');

const router = express.Router()

router.get('/currentuser', isAuth, getCurrentUser)

module.exports = router;