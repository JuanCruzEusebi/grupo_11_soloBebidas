const express = require('express');
const router = express.Router();
const path = require('path');
const mainControllers = require('../controllers/mainControllers');



router.get('/', mainControllers.index)

module.exports = router;