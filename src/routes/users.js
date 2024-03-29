const express = require('express');
const router = express.Router();
const path = require('path');
const usersControllers = require('../controllers/usersControllers')


router.get('/register', usersControllers.register)
router.get('/login', usersControllers.login)
router.get('/newUser', usersControllers.newUser)



module.exports = router;